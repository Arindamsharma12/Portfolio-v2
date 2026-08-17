import DotGrid from "../components/DotGrid";

export default function Home() {
  return (
    <main className="relative w-screen h-screen overflow-hidden bg-[#F9F9F9]">
      <div className="absolute inset-0 z-0">
        <DotGrid
          dotSize={4}
          gap={28}
          baseColor="#C1C1C1"
          activeColor="#5227FF"
          proximity={150}
          shockRadius={250}
          shockStrength={5}
          resistance={750}
          returnDuration={1.5}
          style={{}}
        />
      </div>
      <div className="relative z-10 flex h-full items-center justify-center pointer-events-none">
       </div>
    </main>
  );
}
