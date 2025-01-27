import { BottomNavigation } from '@/components/organisms/bottom-navigation'
import { createFileRoute, Outlet } from '@tanstack/react-router'

export const Route = createFileRoute('/(app)/_layout')({
    component: RouteComponent,
})

function RouteComponent() {
    return (
        <>
            <Outlet />
            <BottomNavigation />
        </>
    )
}
