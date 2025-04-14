import React, { useState } from "react";
import { DodamModal } from "./DodamModal"; 
import { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof DodamModal> = {
  title: "ui/DodamModal",
  component: DodamModal,
  argTypes: {
    isOpen: { control: "boolean" },
    $background: { control: "boolean" },
  },
};

export default meta;

const DodamModalWrapper = (args: any) => {
  const [isOpen, setIsOpen] = useState(false);
    console.log(isOpen);

  return (
    <>
      <button onClick={() => setIsOpen(true)}>Open Modal</button>
      <DodamModal {...args} isOpen={isOpen} close={() => setIsOpen(false)}>
        <div style={{ background: "white", padding: "20px", borderRadius: "10px" }}>
          <h2>Dodam Modal</h2>
          <p>This is a modal content.</p>
          <button onClick={() => setIsOpen(false)}>Close</button>
        </div>
      </DodamModal>
    </>
  );
};

export const Default: StoryObj<typeof DodamModal> = {
  render: (args) => <DodamModalWrapper {...args} />,
  args: {
    isOpen: false, // 기본값
  },
};
