"use-client"
import { Stack } from "@/components/atoms/Stack";
import { Link, useLocation } from "@tanstack/react-router";
import { JSX } from "react";

interface Props {
    icon: JSX.Element;
    text: string;
    activeIcon: JSX.Element;
    pageLink: string;
}

export const BottomNavigationItem = (props: Props) => {
    const { icon, text, activeIcon, pageLink } = props;
    const { pathname } = useLocation();

    const isActive = pathname === pageLink;
    const styles = "group";
    const activeStyles = "is-active";

    const className = isActive ? `${styles} ${activeStyles}` : styles;

    return (
        <Link to={pageLink} className={className}>
            <Stack className="gap-1 items-center">
                <span className="">{isActive ? activeIcon : icon}</span>
                <span className={`text-xs font-medium ${isActive ? 'text-navicon' : 'text-gray'}`}>{text}</span>
            </Stack>
        </Link>
    );
};