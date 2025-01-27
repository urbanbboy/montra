import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/(app)/_layout/home/')({
    component: RouteComponent,
})

function RouteComponent() {
    return <div>Hello "/(app)/_layout/home/"!</div>
}
