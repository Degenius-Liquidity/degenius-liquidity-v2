function CurrentJourneyCard() {
  return (
    <div className="flex h-full flex-col rounded-2xl border border-border bg-surface p-8 md:p-12">
      <h3 className="font-display text-2xl font-semibold tracking-tight text-text-primary md:text-3xl">Current Journey</h3>
      <div className="mt-5 flex flex-1 flex-col gap-4">
        <p className="text-base leading-relaxed text-text-secondary md:text-lg">Right now I'm focused on becoming consistently profitable with funded futures accounts.</p>
        <p className="text-base leading-relaxed text-text-secondary md:text-lg">My goal isn't to hit home runs. It's to build repeatable execution, protect capital and document every lesson along the way.</p>
        <p className="text-base font-medium leading-relaxed text-text-primary md:text-lg">The journey is still in progress.</p>
      </div>
    </div>
  )
}

export default CurrentJourneyCard
