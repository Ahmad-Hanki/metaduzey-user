"use client";

import { useFormStatus } from "react-dom";

interface SubmissionButtonProps {
  submit: string;
  submitting: string;
}
const SubmissionButton = ({ submit, submitting }: SubmissionButtonProps) => {
  const { pending } = useFormStatus();
  let content;
  if (pending) {
    content = (
      <button className="disabled btn">
        <span className="loading loading-ring loading-xs"></span>
        <p>{submitting}</p>
      </button>
    );
  } else {
    content = (
      <button className="btn hover:text-white">
        <p>{submit}</p>
      </button>
    );
  }
  return content;
};

export default SubmissionButton;
