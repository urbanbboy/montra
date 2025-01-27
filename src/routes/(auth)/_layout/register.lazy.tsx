import { createLazyFileRoute } from '@tanstack/react-router'

export const Route = createLazyFileRoute('/(auth)/_layout/register')({
    component: RouteComponent,
})

function RouteComponent() {
    return <div>Hello "/(auth)/_layout/register"!</div>
}
