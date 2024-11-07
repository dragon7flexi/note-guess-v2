import { Href, useRouter } from "expo-router";

const router = useRouter();

export function navigate(path: string): void {
    router.push(path as Href);
}