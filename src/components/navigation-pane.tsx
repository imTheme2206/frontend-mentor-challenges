import React from "react";
import { Link } from "react-router-dom";
import Card from "../ui/card";

export default function NavigationPane() {
  return (
    <div className="absolute bottom-2 right-2 group">
      <button className="rounded-full bg-slate-200 w-14 h-14 peer relative"></button>
      <nav className="px-4 h-0 w-[200px] overflow-hidden group-focus-within:min-h-[200px] absolute -top-[160px] right-1 rounded">
        <Card>
          <ul className="py-2">
            <li>
              <Link to="/blog-preview-card">Blog Preview Card</Link>
            </li>
            <li>
              <Link to="/news-letter-subscription">
                News Letter Subscription
              </Link>
            </li>
          </ul>
        </Card>
      </nav>
    </div>
  );
}
