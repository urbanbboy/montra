import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/(app)/_layout/budget/')({
    component: RouteComponent,
})

function RouteComponent() {
    return <div>Hello "/(app)/_layout/budget/"!</div>
}
