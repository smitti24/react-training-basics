import React, { useState } from "react";
import Section from "../Section";
import "./Buttons.scss";
import HomeIcon from "../../assets/svg/HomeIcon";
import Button from "./Button";
import PlusIcon from "../../assets/svg/PlusIcon";

export default function Buttons() {
  const [showButtons, setShowButtons] = useState(false);

  const handleShowButtons = () => {
    setShowButtons(!showButtons);
  };

  return (
    <>
      <Section title="Buttons" id="buttons">
        <div className="text-center">
          <button className="button filled-button " onClick={handleShowButtons}>
            Show/Hide Buttons
          </button>
        </div>

        {showButtons && (
          <div className="buttons-container">
            <Button Icon={HomeIcon}>Home</Button>
            <Button mode="outline">Outline</Button>
            <Button mode="text">Text</Button>
            <Button Icon={PlusIcon} mode="text">
              Add
            </Button>
            <Button mode="filled" disabled>
              Disabled
            </Button>
            <Button onClick={() => console.log("Clicked!")}>Click me</Button>
          </div>
        )}
      </Section>
    </>
  );
}
