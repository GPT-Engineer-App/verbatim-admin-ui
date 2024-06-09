import React from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';

const Settings = () => {
  return (
    <div className="p-4 space-y-4">
      <Card>
        <CardHeader>
          <CardTitle>Platform Settings</CardTitle>
        </CardHeader>
        <CardContent>
          <form className="space-y-4">
            <div>
              <label htmlFor="siteName" className="block text-sm font-medium">Site Name</label>
              <Input id="siteName" type="text" placeholder="Enter site name" />
            </div>
            <div>
              <label htmlFor="siteDescription" className="block text-sm font-medium">Site Description</label>
              <Input id="siteDescription" type="text" placeholder="Enter site description" />
            </div>
            <Button type="submit">Save Settings</Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
};

export default Settings;