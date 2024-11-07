import { Slot } from "expo-router";
import React from "react";
import { RecoilRoot } from "recoil";

export default function LessonLayout() {
    return (
        <RecoilRoot>
            <Slot></Slot>
        </RecoilRoot>
    )
}