import type { KeyBinding } from "@opentui/core";
import { EmptyBorder } from "./border";
import { StatusBar } from "./status-bar";
import { CommandMenu } from "./command-menu";

interface SubmitPayload {
    text: string;
}

interface InputBarProps {
    onSubmit: (payload: SubmitPayload) => void;
    disabled?: boolean;
}

export const TEXTAREA_KEY_BINDINGS: KeyBinding[] = [
    {name: "return", action: "submit"},
    {name: "enter", action: "submit"},
    {name: "return", shift: true, action: "newline"},
    {name: "enter", shift: true, action: "newline"}
]

export function InputBar({ onSubmit, disabled = false }: InputBarProps) {
    return (
        <box width="100%" alignItems="center">
            <box
                border={["left"]} 
                borderColor="cyan"
                customBorderChars={{
                    ...EmptyBorder,
                    vertical: "|",
                    bottomLeft: "└",
                }}
            >
                <box
                    position="relative"
                    justifyContent="center"
                    paddingX={2}
                    paddingY={1}
                    backgroundColor="1A1A24"
                    width="100%"
                    gap={1}
                >
                    {true &&(
                        <box
                          position="absolute"
                          bottom="100%"
                          left={0}
                          width="100%"
                          backgroundColor="#1A1A24"
                          zIndex={10}
                        >
                            <CommandMenu 
                              query =""/>
                        </box>
                    )}
                    <textarea 
                       focused ={!disabled}
                       keyBindings={TEXTAREA_KEY_BINDINGS}
                       placeholder={`Ask anything... "Fix bug in the codebase"`}
                    />
                    <StatusBar />
                </box>

            </box>
        </box>
    )
};