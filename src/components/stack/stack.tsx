function Stack() {
  const techs = [
    { name: "Mongo", img: "mongo.png" },
    { name: "Express", img: "express.png" },
    { name: "React", img: "react.png" },
    { name: "NodeJS", img: "node.png" },
    { name: "HF", img: "HF.png" },
    { name: "PyTorch", img: "PyTorch.png" },
    { name: "TF", img: "tf.png" },
    { name: "ONNX", img: "onnx.png" },
    { name: "C++", img: "cplus.png" },
    { name: "Python", img: "python.png" },
    { name: "Java", img: "java.png" },
    { name: "TS", img: "ts.png" },
  ];

  return (
    <div className="md:fixed top-[5.3vw] left-[33vw] shadow-lg bg-white m-[1vw] mt-[2.5vw] p-[3vw] 
                    md:p-[1.2vw] md:pt-[0.5vw] rounded-xl border border-gray-200 md:w-[21.55vw]">
      <p className="flex justify-left text-[6.4vw] md:pl-[0vw] md:text-[1.7vw] font-[600] tracking-[-0.08vw] pb-[1vw] text-center">
        Tech Stack - <span className="pl-[0.4vw] semibold"> AIML | MERN</span>
      </p>

      {/* Mobile = flex rows | Desktop = grid */}
      <div className="flex flex-wrap justify-center gap-[3vw] 
                md:grid md:grid-cols-4 md:gap-x-[1vw] md:gap-y-[0.8vw] md:justify-items-center">
        {techs.map((tech, i) => (
          <div
            key={i}
            className="flex flex-col items-center justify-center shadow-md shadow-gray-200 
                       w-[20vw] h-[20vw] md:w-[4.5vw] md:h-[4.2vw] bg-gray-100 
                       rounded-md border border-gray-200"
          >
            <img
              src={tech.img}
              alt={tech.name}
              className="w-[8vw] md:w-[2vw] mb-[0.3vw] mt-[0.2vw]"
            />
            <p className="text-[4.2vw] tracking-[-0.05vw] md:text-[1vw]">{tech.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Stack;
