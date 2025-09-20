import Link from "next/link";

export default function NavBar() {
    return (
        <nav
            style={{
                padding: "15px",
                backgroundColor: "#008080",
                color: "white",
                display: "flex",
                justifyContent: "space-between",
            }}
        >
            <Link href="/" style={{ color: "white", fontWeight: "bold" }}>
                Puzzle Challenge
            </Link>
            <div>
                <Link href="/rules" style={{ marginLeft: "15px", color: "white" }}>
                    Rules
                </Link>
            </div>
        </nav>
    );
}
