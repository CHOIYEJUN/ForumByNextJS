import Link from "next/link";

export default function RootLayout() {

    return (

            <div className="navbar">
                <Link href="/" className="logo">Home</Link>
                <Link href="/list">List</Link>
                <Link href="/write">Write</Link>
            </div>

        )
}
