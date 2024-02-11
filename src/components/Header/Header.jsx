import reactImage from "../../assets/react-core-concepts.png";
import "./Header.scss";

const randomDescriptions = ["Fundementals", "Crucial", "Core"];

const getRandomDescription = (array) => {
  return randomDescriptions[Math.floor(Math.random() * array.length)];
};

export default function Header({ text }) {
  const description = getRandomDescription(randomDescriptions);
  return (
    <header>
      <img src={reactImage} alt="Stylized atom" />
      <h1>{text}</h1>
      <p>
        {description} React concepts you will need for almost any app you are
        going to build!
      </p>
    </header>
  );
}

// export function Header({ text }) {
//   return (
//     <header>
//       <img src="src/assets/react-core-concepts.png" alt="Stylized atom" />
//       <h1>{text}</h1>
//       <p>
//         Fundamental React concepts you will need for almost any app you are
//         going to build!
//       </p>
//     </header>
//   );
// }
