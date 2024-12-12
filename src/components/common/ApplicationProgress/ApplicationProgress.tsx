"use client";

import { StageProgressType } from "@/types/Application/ApplicationType";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import { DynamicRoundedContainer } from "../DynamicRoundedContainer";
import { CaptionSemi } from "../text/CaptionSemi";

type Props = {
  progresses: StageProgressType[];
};

export default function ApplicationProgress({ progresses }: Props) {
  return (
    <DynamicRoundedContainer
      title="Progress"
      className="flex flex-col w-[794px] h-[313px] gap-8"
    >
      <ul className="flex justify-evenly items-center relative">
        <div
          className="absolute top-[60px] left-0 right-0 h-[2px] bg-secondary-medium-gray z-0"
          style={{
            margin: "0 auto",
            width: "70%",
          }}
        />
        {progresses.map(({ id, name, percentage }, index) => (
          <li key={id} className="relative flex flex-col items-center gap-8">
            <div
              style={{
                width: 120,
                height: 120,
                zIndex: 1,
                background: "#FFF",
              }}
            >
              <CircularProgressbar
                value={percentage}
                text={`${percentage}%`}
                styles={{
                  path: {
                    stroke: "#0C9986",
                  },
                  text: {
                    fill: "#1e1e1e",
                    fontSize: "24px",
                    fontWeight: "bold",
                  },
                }}
              />
            </div>
            <CaptionSemi>{name}</CaptionSemi>
            {index < progresses.length - 1 && (
              <div className="absolute top-[60px] left-[100px] h-[2px] bg-secondary-medium-gray w-[120px] -z-1" />
            )}
          </li>
        ))}
      </ul>
    </DynamicRoundedContainer>
  );
}
