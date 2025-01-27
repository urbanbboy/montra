import { createFileRoute, Outlet } from '@tanstack/react-router'

export const Route = createFileRoute('/(auth)/_layout')({
    component: RouteComponent,
})

function RouteComponent() {
    return (
        <div className='flex items-center justify-center h-screen'>
            Hello "/(auth)/_layout"
            <Outlet />
        </div>
    )
}
