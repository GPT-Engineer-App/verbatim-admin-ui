import { useState } from "react";
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
} from "@/components/ui/card.jsx";
import { Button } from "@/components/ui/button.jsx";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs.jsx";
import { Table, TableHeader, TableBody, TableRow, TableHead, TableCell } from "@/components/ui/table.jsx";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="p-4">
      <Card>
        <CardHeader>
          <CardTitle>Verbatim Admin Suite</CardTitle>
        </CardHeader>
        <CardContent>
          <Tabs defaultValue="overview">
            <TabsList>
              <TabsTrigger value="overview">Overview</TabsTrigger>
              <TabsTrigger value="users">Users</TabsTrigger>
              <TabsTrigger value="posts">Posts</TabsTrigger>
            </TabsList>
            <TabsContent value="overview">
              <p>Welcome to the Verbatim Admin Suite. Use the tabs to navigate through different sections.</p>
            </TabsContent>
            <TabsContent value="users">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>User ID</TableHead>
                    <TableHead>Username</TableHead>
                    <TableHead>Email</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  <TableRow>
                    <TableCell>1</TableCell>
                    <TableCell>john_doe</TableCell>
                    <TableCell>john@example.com</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>2</TableCell>
                    <TableCell>jane_doe</TableCell>
                    <TableCell>jane@example.com</TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </TabsContent>
            <TabsContent value="posts">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Post ID</TableHead>
                    <TableHead>Title</TableHead>
                    <TableHead>Content</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  <TableRow>
                    <TableCell>1</TableCell>
                    <TableCell>First Post</TableCell>
                    <TableCell>This is the content of the first post.</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>2</TableCell>
                    <TableCell>Second Post</TableCell>
                    <TableCell>This is the content of the second post.</TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>
    </div>
  );
}

export default App;