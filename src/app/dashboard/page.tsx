
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/components/ui/avatar";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default function DashboardPage() {
  return (
    <div className="min-h-screen bg-gray-100 p-8">

      <div className="flex items-center justify-between mb-8">
        <h1 className="text-2xl font-bold">
          Dashboard
        </h1>

        <div className="flex items-center gap-3">
          <Avatar>
            <AvatarImage src="https://github.com/shadcn.png" />
            <AvatarFallback>AS</AvatarFallback>
          </Avatar>

          <div>
            <p className="font-semibold">Asykar</p>
            <Badge>Administrator</Badge>
          </div>
        </div>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Selamat Datang!</CardTitle>
        </CardHeader>

        <CardContent>
          <p>Ini adalah halaman dashboard Next.js.</p>
          <Button className="mt-4">
            Mulai
          </Button>
        </CardContent>
      </Card>

    </div>
  );
}
