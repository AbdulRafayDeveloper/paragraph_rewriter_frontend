"use client";
import { useState } from "react";

const Tool = () => {
  const [activeTab, setActiveTab] = useState("Normal");

  const handleTabClick = (tabName) => {
    setActiveTab(tabName);
  };

  return (
    <>
      <div className="container-fluid p-0 ">
        <div className="">
          {/* Title Section */}
          <div className="flex justify-center items-center text-center">
            <div className="w-full sm:w-[600px] lg:w-[800px]">
              <h1 className="text-2xl sm:text-3xl font-bold">Paragraph Rewriter</h1>
              <p className="text-md sm:text-lg">
                Use our AI Paragraph Rewriter tool to turn any paragraph into a new and unique one without changing the original context.
              </p>
            </div>
          </div>

          {/* Content Section */}
          <div className="mt-5 p-5 w-full lg:max-w-[1320px] mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 bg-slate-100 rounded-lg p-3">
              {/* Tab/Select Menu Section */}
              <div className="w-full">
                {/* Mobile Dropdown for smaller screens */}
                <div className="md:hidden mb-4">
                  <label htmlFor="tabs" className="sr-only">
                    Select your option
                  </label>
                  <select
                    id="tabs"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                    onChange={(e) => handleTabClick(e.target.value)}
                    value={activeTab}
                  >
                    <option value="Normal">Normal</option>
                    <option value="Fluent">Fluent</option>
                    <option value="Formal">Formal</option>
                    <option value="Innovative">Innovative</option>
                    <option value="Coherent">Coherent</option>
                    <option value="Academic">Academic</option>
                  </select>
                </div>

                {/* Tabs for larger screens */}
                <ul className="hidden md:flex space-x-3 text-sm font-medium text-center text-gray-500">
                  {["Normal", "Fluent", "Formal", "Innovative", "Coherent", "Academic"].map((tab) => (
                    <li className="w-full" key={tab}>
                      <button
                        className={`text-lg inline-block w-full py-2 rounded-lg focus:ring-4 focus:ring-blue-300 ${
                          activeTab === tab
                            ? "bg-blue-400 text-white"
                            : "bg-gray-100 hover:bg-blue-400 text-gray-900"
                        }`}
                        onClick={() => handleTabClick(tab)}
                      >
                        {tab}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Additional Content Section */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-2 mt-5">
              <div className="gap-1 bg-slate-100 p-5 rounded-lg">
                <div className="relative h-[400px] w-full">
                  <input
                    type="text"
                    className="bg-slate-100 text-xl w-full"
                    placeholder="Enter Paragraph to rewrite..."
                  />
                  <div className="mt-24 p-6 inset-0 flex justify-center items-center">
                    <div className="flex gap-2 h-[90px] mt-10">
                      <div className="border rounded-md border-gray-500 p-4 w-[120px] hover:bg-gray-300">
                        <span className="">
                          <img
                            className="w-[45px] h-[45px] p-1"
                            src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBwgHBhUTBxAWFhUWFhgVFhcYGBoXFhgVFRsYFhoaGBoZHCkgGR0lIRMcIjEtJSk3OjouFx8zRDcsOigtLjcBCgoKDQ0NDg8ODisdExkrKy0rKystKysrKysrKy0rKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrK//AABEIAMkA+wMBIgACEQEDEQH/xAAcAAEAAQUBAQAAAAAAAAAAAAAABAECAwUHBgj/xAA9EAACAgECAwUFBgMGBwAAAAAAAQIDEQQFEiExBhNBYXEHIlGBkRQVMkJSoSOCkiQzNGJyoyU1U3OiseH/xAAVAQEBAAAAAAAAAAAAAAAAAAAAAf/EABQRAQAAAAAAAAAAAAAAAAAAAAD/2gAMAwEAAhEDEQA/AO4gAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAApnmeR7X+0LY+zDcLpO27/pV4cl/rb5QXrz8gPXlE0+hwCzt52q7ab1Xpdun3EbpKCjX1UespSm1l4im3jC5dDuez7fTtW3Qq0+WorGW8yk+rlJvm23lv1AmgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAW2TjXBubSSWW3ySS6tlzOM+1rti9bOej0E/wCDDlqJJ85zfSmL+Tz8/hhhg9oPtUv1TlR2Zk4V84vUL8c2uqq/THw4uvN4x1OTyblJuTbb5tt5bfxbfVl1tsrZ5fokuiS6JeRbCEpzSrTbbwklltvwSXVhXX/YTsemWqu1Fsk7YxjBRXPu42ZfvP8AU+DouiXmdmRzX2I7T92bRqO8mpWStUbIx5quUYJ8Dl0csTy8dMpdUzpQQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAKAeU9pG/anYezudvWbbrI0V80sSmpPi5/BRfp16JnzlueojZZwUvMIZ5/rm/xT+eMLySOh+17tG9VvM4Uv3aM0Q/7s0ndP+WOK15yl8OfLwqsI8T5tLzf/AM5/QnV6+Ggr/wCHZjPHO54U0vFVrpWvPr5rmQEe+9lXZCrfN749xhx1Vc5R/LxflU34vl+Hrhc8ckw6v7J9mlsvYmmNqxOzN0/WzDX0ior5HsSkVwrkVCALXOK6sp3sfAC8FqlnoXAAAAAAAAAAAAAAAAAAAAAAAAAAAANd2h3KGz7JdqLelVcp+rS5L5vCNic79uev+y9jO7i8O66uPqoPvH+8EBwnc9Tbqb/4zy1ly87Jtzsf9UmvRIhm37P9mt67R2Y2iiU14z6Vr1m+X/s612T9j2h0KVnaWaumufdxyqV/qbw5/PC8grnXYbsLunavUqUE69On71z8f8ta/PL9l+x9D7Nte3dntrhToIqEILC8W34yk/zSfiyktZRpa1DRxSSWEkkopL4JESV07ZZmwjZWa79CMTunN82RIskVQnP8KAyx6kqqvl7xSqnh/F1/Ys1e4aTRvGptjF9Um/ea8l1YEoGr+9pW/wCCotn58Krj9bGn9EyuN4uXvOqryXFa8er4Vn5MDZEe/XaWiWLrIJ/ByWfoRVtMZ89bbba/g5cMP6K+GL+eTHss1PVXKqiuuuE+7rnHGbHFLjeElhKWY+sWBs6Lo315hnHnFxf0kkzIAAAAAAAAAAAAAAAAAAAAAAAWW2QqrcrWkkm23ySS5tt+ByvTa6nt17Skrocel0sZ8MJLMJWJcLck+XFmzo/0LzOqWwjZBqaymmmn4p8mjm+27Lr+zHbW6GmsktNqIO2vL91WZSsT80seqfqB0KVlGkrSiksLlGK8PgkjVaq7WauXuwko/DD/AHMun1NGmj/Zq7bpvq4xeH6TniGP5jI7t61C/hVVVedknZJfywwv/ICJXodVL8mPUrqIUaGGdwvrrXxlJL6ZfMkfdF2o/wCY6q2f+WDVMP8Ab9/6yZno23bNuzOqqEX4zaXF85S5/uBr6dbp5/4Gm67zUHCD9JWcKa9MkqP33evcjTQvNyul/SuCK+rIEu2e1PdnTp3K1RiuKVUJ3LvG3itd1GXNJZeemY/E3+lueooUuCUc8+GSxJeqzyAhLarLF/bNRbP4pNVx/wBtJ4+Zl02j2/bKm6K4VrrJ4Uc+Lcn1fqyW7IqeG1l9F4/Q0u5UbFKFup11cLO5UpTlJcah3ccvCeUml8AImq7a7b95wp21vUfidroUru7iuST7qMlxNtdWuSk/A3dOvh9hlbqoSqjFSk+8wmoR5uTw3hYWTxW527ht3Zya2uSr1dy+1XtR4o0UxWeHhj8IxjVFLm3l/FmfVbtve8dnqo7NCN82qnqrKpRhXKLcXbXppzlwym48XPiwvjl4A3+973RRs0bNLYv42I1SXPlJNuaXV8MU5Y8cJeJE0naPbaKNLVt1dsu+brhFRxKEa3KEpWKTTWHB58eTeOTZrtfsO/7puteoslVFOFlTonmUKYScJRnHg5TtThz545pLpl7WfY/brNTTNTti6qXR7k+HvK5NSkptLPNxTbTXiBtdBrlrrp9ws1wfCp55Tms8aS+EeSznrxLwJxjopq09KhRFRjFJRilhJLkkkZAAAAAAAAAAAAAAAAAAAAAAAWuEZP3kXAAUZ5LtB20p2fXShwxcYyrrk22uGdkoZlPliFNcZpyk+WZRXUs0O5bvu+jurqhLFts406jCVS00kl3sWsOT/Fwrq2k84eQPWVXV31qVElKL6NNNPHLk16HjNxls1e326ncNNC2U7nVplbb9ojdZKbjWoKbca8y8EuSXkY+znZLWbXtlmk0ydFM7Juditdlkq/wwhVn+791Lib6PiSXNNbDQdh9LXt0Ktytnd3VcKqZf3TqhVhx7vgeYzfBHilnL4V0XICFoN0Wwbn9kh3fd0wVusul7rldfxOKrjHrKUuiS6PHLCzH0s970XbGd+qeplC+pyr0sYJ1ppqNcHZ0qkoxc5ZaWbOXFh59Vouzez6G+Nmn00O8isKyS4refNt2SzJyeXzbybZAeAj2f7Ta/fYX67uKZR73iuhJ3WYsxGMKVKuKhCMV+brJ8WGexhtWijtT0zhmpwlCUW2+KM01Lib5yby8t9csngCBtO06HadNwaCvhT5ttuUpP4ylJuUvhzfTkTYxjFYisFwAphFQAAAAAAAAAAAAAAAAAAAAAAAAAAAAhw2vQ13WSrpgpXYdr4VmzCwuPl72F8SVCCgvd9C4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAB//9k="
                            alt="Icon"
                          />
                          <span className="text-sm">Paste Text</span>
                        </span>
                      </div>
                      <div className="border rounded-md border-gray-500 p-4 w-[120px] hover:bg-gray-300">
                        <span className="">
                          <img
                            className="w-[45px] h-[45px] p-1"
                            src="data:image/jpeg;base64,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"
                            alt="Icon"
                          />
                          <span className="text-sm">Sample Text</span>
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="gap-1 bg-slate-100 p-5 rounded-lg">

              </div>
              {/* You can add more content here if necessary */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Tool;
