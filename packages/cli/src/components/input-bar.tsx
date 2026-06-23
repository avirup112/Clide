import { EmptyBorder } from "./border";
import { StatusBar } from "./status-bar";

interface SubmitPayload {
    text: string;
}

interface InputBarProps {
    onSubmit: (payload: SubmitPayload) => void;
    disabled?: boolean;
}

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
                    <textarea 
                       focused ={!disabled}
                       placeholder={`Ask anything... "Fix bug in the codebase"`}
                    />
                    <StatusBar />
                </box>

            </box>
        </box>
    )
};