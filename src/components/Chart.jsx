const Chart = () => {
  return (
    <div id="dexscreener-embed" className=" border-b border-neutral-800 pb-20">
      <h2 className="text-3xl sm:text-5xl lg:text-6xl text-center mt-40 tracking-wide mb-10">
        Token{" "}
        <span className="bg-gradient-to-r from-orange-500 to-orange-800 text-transparent bg-clip-text">
          Graph
        </span>
      </h2>
      <iframe
        src="https://dexscreener.com/ton/EQCaY8Ifl2S6lRBMBJeY35LIuMXPc8JfItWG4tl7lBGrSoR2?embed=1&theme=dark"
        style={{ width: "100%", height: "700px", border: "none" }}
      ></iframe>
    </div>
  );
};

export default Chart;
