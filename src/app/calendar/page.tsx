import { Button } from "@/components/ui/upImmigrationButton";
import { DetailedCalendar } from "../calendar/_components/DetailedCalendar";
import Link from "next/link";

export default function CalendarPage() {
    return (
        <>
            <div>
                <Button asChild><Link href={"/appointment"}>appointment</Link></Button>
            </div>
            <DetailedCalendar />
        </>
    )
}
