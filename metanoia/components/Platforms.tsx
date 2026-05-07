export default function Platforms() {
  return (
    <section className="py-12 px-6 bg-marfil border-y border-arena">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <p className="section-label">Pauta en las plataformas que más importan</p>
          <div className="flex flex-wrap justify-center md:justify-end gap-3">
            {["Meta Ads", "Google Ads", "TikTok Ads"].map((p) => (
              <span
                key={p}
                className="bg-carbon text-marfil text-xs font-semibold px-4 py-2 rounded-full tracking-wide"
              >
                {p}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
