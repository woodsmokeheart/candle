const Chart = () => {
  return (
    <div id="dexscreener-embed" className=" border-b border-neutral-800 pb-20">
      <h2 className="text-3xl sm:text-5xl lg:text-6xl text-center mt-40 tracking-wide mb-10">
        Token{" "}
        <span className="bg-gradient-to-r from-orange-500 to-orange-800 text-transparent bg-clip-text">
          Graph
        </span>
      </h2>

      <div id="dexscreener-embed">
        <iframe
          src="https://dexscreener.com/ton/EQBb3d5NNIxKCknXW4LvgUWYA0au-uv-f8zD9Dj3FXAPbPOC?embed=1&theme=dark"
          style={{ width: "100%", height: "700px", border: "none" }}
        ></iframe>
      </div>
    </div>
  );
};

export default Chart;
