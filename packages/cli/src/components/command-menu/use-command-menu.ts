import { useRef, useState, useMemo, type RefObject } from "react";
import type { ScrollBoxRenderable } from "@opentui/core";
import { useKeyboard } from "@opentui/react";
import { getFilteredCommands } from "./filter-command";
import type { Command } from "./types";


type UseCommandMenuReturn = {
    showCommandMenu: boolean;
    commandQuery: string;
    selectedIndex: number;
    scrollRef: RefObject<ScrollBoxRenderable | null>;
    handleContentChnage: (event: KeyboardEvent) => void;
    resolveCommand: (index: number) => void;
    setSelectedIndex: (index: number) => void;
};


export function useCommandMenu(): UseCommandMenuReturn {
    const [textValue, setTextValue] = useState("");
    const [selectedIndex, setSelectedIndex] = useState(0);
    const [showCommandMenu, setShowCommandMenu] = useState(false);
    const scrollRef = useRef<ScrollBoxRenderable | null>(null);

    const commandQuery = showCommandMenu && textValue.startsWith("/") ? textValue.slice(1) : "";
    const filteredCommands = useMemo(() => getFilteredCommands(commandQuery), [commandQuery]);

    const handleContentChnage = (text: string) => {
        setTextValue(text);
        setSelectedIndex(0);

        const scrollbox = scrollRef.current;

        if(scrollbox) {
            scrollbox.scrollTo(0);
        }

        const prefix = text.startsWith("/") ? text.slice(1): null;
        if (prefix !== null && !prefix.includes("")) {
            setShowCommandMenu(true);
        } else {
            setShowCommandMenu(false);
        }
    };

    // Resolve a command at a specific index (returns the command, caller handles execution)
    const resolveCommand = (index: number): Command | undefined => {
        const command = filteredCommands[index];
        if (command) {
            setShowCommandMenu(false);
        }
        return command;
    };

};