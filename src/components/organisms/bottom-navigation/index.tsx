"use client";

import { BottomNavigationItem } from "@/components/molecules/bottom-navigation-item"
import {
    Home,
    HomeActive,
    PieChart,
    PieChartActive,
    Profile,
    ProfileActive,
    Transaction,
    TransactionActive
} from "@/components/atoms/Icon";
import { Box } from "@/components/atoms/Box";
import { Container } from "@/components/molecules/container";

export const BottomNavigation = () => {
    return (
        <Box className="h-bottom-navigation fixed bottom-0 left-0 right-0 bg-gray-100 shadow-2xl">
            <Container className="h-full my-2">
                <div className="grid grid-cols-4 h-full items-center justify-center gap-7">
                    <BottomNavigationItem
                        pageLink="/home"
                        icon={<Home />}
                        activeIcon={<HomeActive />}
                        text="Home"
                    />
                    <BottomNavigationItem
                        pageLink="/transaction"
                        icon={<Transaction />}
                        activeIcon={<TransactionActive />}
                        text="Transaction"
                    />
                    <BottomNavigationItem
                        pageLink="/budget"
                        icon={<PieChart />}
                        activeIcon={<PieChartActive />}
                        text="Budget"
                    />
                    <BottomNavigationItem
                        pageLink="/profile"
                        icon={<Profile />}
                        activeIcon={<ProfileActive />}
                        text="Profile"
                    />
                </div>
            </Container>
        </Box>
    )
}