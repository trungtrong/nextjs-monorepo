import { Metadata } from "next";

// eslint-disable-next-line @nx/enforce-module-boundaries
import { ServerSideRouteGuard } from './../../../../../libs/shared/core/src/guards';

export const metadata: Metadata = {
    title: "Settings",
    description:
    "Conduit is realworld social blogging site. it uses a custom API for all requests, including authentication. Setting page of conduit",
};

export default async function EditorLayout({
	children,
}: Readonly<{ children: React.ReactNode }>) {
    return (
        <ServerSideRouteGuard><main>{children}</main></ServerSideRouteGuard>
    );
}
