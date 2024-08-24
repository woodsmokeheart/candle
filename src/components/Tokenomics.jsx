import pie from "../assets/pie.png";

const Tokenomics = () => {
  return (
    <div className="mt-20">
      <h2 className="text-3xl sm:text-5xl lg:text-6xl text-center mt-6 tracking-wide">
        <span className="bg-gradient-to-r from-orange-500 to-orange-800 text-transparent bg-clip-text">
          Tokenomics
        </span>
      </h2>
      <div className="flex flex-wrap justify-center">
        <div className="pt-12 w-full lg:w-1/2">
          <div className="flex mb-12 ">
            <div>
              <h5 className="mt-1 mb-8 text-4xl bg-gradient-to-r  from-red-500 to-#ff2f00-800 text-transparent bg-clip-text">
                Attention!!!
              </h5>
              <p className="text-md text-white-500 mb-5 text-xl">
                In the initial days, the $CNDL contract will impose a 90% sales
                fee, which will decrease by 10% each day. This mechanism is
                designed to ensure high liquidity and protect you from making an
                unwise early sale of the asset.
              </p>
              <p className="text-md text-white-500 text-2xl">
                Do not add liquidity, before the end of the first phase, you
                will lose your TON
              </p>
            </div>
          </div>
        </div>
        <div className="p-2 pt-12 w-full lg:w-1/2">
          <img src={pie} alt="Coding" />
        </div>
      </div>
    </div>
  );
};

export default Tokenomics;
