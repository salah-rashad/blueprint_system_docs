import React from "react";
import { readFile } from "../../components/custom";

// export default function About() {
//   var readme = readFile(
//     "https://raw.githubusercontent.com/salah-rashad/salah-rashad/master/README.md"
//   );
//   return (
//     <Layout title="Salah Rashad" description="About me">
//       <div
//         style={{
//           display: "flex",
//           justifyContent: "center",
//           alignItems: "center",
//           height: "50vh",
//           fontSize: "20px",
//         }}
//       ></div>
//     </Layout>
//   );
// }

export const ReadMe = () => {
  var readme = readFile(
    "https://raw.githubusercontent.com/salah-rashad/salah-rashad/master/README.md"
  );

  return readme ?? "# hi";
};
