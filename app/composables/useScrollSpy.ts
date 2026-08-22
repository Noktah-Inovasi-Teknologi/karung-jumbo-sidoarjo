/**
 * Reports which of the given section ids is currently the one being read.
 *
 * The header previously derived its active item from `route.hash`, which only
 * changes when a nav link is clicked — scrolling past a section left the menu
 * pointing at whatever was last clicked, or at nothing at all.
 *
 * Detection uses a thin horizontal band near the top of the viewport rather
 * than "is the section visible": with full-height sections several are on
 * screen at once, so visibility alone cannot pick a winner. A section counts as
 * active while it crosses that band.
 */
export function useScrollSpy(ids: string[]) {
  const activeId = ref<string | null>(null);

  onMounted(() => {
    if (!("IntersectionObserver" in window)) return;

    const elements = ids
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => el !== null)
      // Document order, so ties resolve to the section nearest the top.
      .sort((a, b) =>
        a.compareDocumentPosition(b) & Node.DOCUMENT_POSITION_FOLLOWING ? -1 : 1,
      );

    if (elements.length === 0) return;

    const intersecting = new Set<string>();

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) intersecting.add(entry.target.id);
          else intersecting.delete(entry.target.id);
        }

        const current = elements.find((el) => intersecting.has(el.id));
        activeId.value = current?.id ?? null;
      },
      {
        // Band running from just under the sticky header to ~40% down the
        // viewport. Top offset keeps a section from registering while it is
        // still hidden behind the header.
        rootMargin: "-20% 0px -60% 0px",
        threshold: 0,
      },
    );

    for (const el of elements) observer.observe(el);
    onBeforeUnmount(() => observer.disconnect());
  });

  return activeId;
}
