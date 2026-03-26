'use client';

import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { Button } from '@/components/ui/button';
import { Search, Eye } from 'lucide-react';
import { interns } from '@/lib/mock-data';
import Link from 'next/link';
import { useState } from 'react';

function getStatusBadgeClass(status: string) {
  switch (status) {
    case 'submitted':
      return 'bg-accent-warning/10 text-accent-warning border-accent-warning/30';
    case 'reviewed':
      return 'bg-accent-primary/10 text-accent-primary border-accent-primary/30';
    case 'pending':
      return 'bg-text-muted/10 text-text-muted border-text-muted/30';
    default:
      return 'bg-text-muted/10 text-text-muted border-text-muted/30';
  }
}

export default function InternsPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [filterStatus, setFilterStatus] = useState('all');

  const filteredInterns = interns.filter((intern) => {
    const matchesSearch =
      intern.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      intern.github.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesFilter =
      filterStatus === 'all' ||
      (filterStatus === 'active' && intern.reportStatus !== 'pending') ||
      (filterStatus === 'pending' && intern.reportStatus === 'pending');
    return matchesSearch && matchesFilter;
  });

  return (
    <div className="p-8">
      <div className="mb-8">
        <h1 className="text-4xl font-mono font-bold text-text-primary mb-2">
          Intern Management
        </h1>
        <p className="text-text-muted">
          Manage and monitor intern progress and performance
        </p>
      </div>

      <Card className="bg-bg-surface border-border-color p-6 mb-6">
        <div className="flex gap-4 items-center">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-text-muted" />
            <Input
              placeholder="Search by name or GitHub username..."
              className="pl-10 bg-bg-elevated border-border-color text-text-primary placeholder:text-text-muted"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
          <Select value={filterStatus} onValueChange={setFilterStatus}>
            <SelectTrigger className="w-48 bg-bg-elevated border-border-color text-text-primary">
              <SelectValue placeholder="Filter by status" />
            </SelectTrigger>
            <SelectContent className="bg-bg-elevated border-border-color">
              <SelectItem value="all">All Interns</SelectItem>
              <SelectItem value="active">Active</SelectItem>
              <SelectItem value="pending">Pending Report</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </Card>

      <Card className="bg-bg-surface border-border-color overflow-hidden">
        <Table>
          <TableHeader>
            <TableRow className="border-border-color hover:bg-transparent">
              <TableHead className="text-text-muted font-mono text-label">
                Name
              </TableHead>
              <TableHead className="text-text-muted font-mono text-label">
                GitHub Username
              </TableHead>
              <TableHead className="text-text-muted font-mono text-label">
                Assigned Period
              </TableHead>
              <TableHead className="text-text-muted font-mono text-label">
                Report Status
              </TableHead>
              <TableHead className="text-text-muted font-mono text-label text-center">
                Issues This Week
              </TableHead>
              <TableHead className="text-text-muted font-mono text-label text-right">
                Actions
              </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {filteredInterns.map((intern, index) => (
              <TableRow
                key={intern.id}
                className={`border-border-color ${index % 2 === 0 ? 'bg-bg-surface' : 'bg-bg-elevated/30'}`}
              >
                <TableCell className="font-medium text-text-primary">
                  {intern.name}
                </TableCell>
                <TableCell className="font-mono text-text-muted">
                  @{intern.github}
                </TableCell>
                <TableCell className="text-text-muted">
                  {intern.assignedPeriod}
                </TableCell>
                <TableCell>
                  <Badge
                    variant="outline"
                    className={`text-xs ${getStatusBadgeClass(intern.reportStatus)}`}
                  >
                    {intern.reportStatus}
                  </Badge>
                </TableCell>
                <TableCell className="text-center font-mono text-text-primary">
                  {intern.issuesThisWeek}
                </TableCell>
                <TableCell className="text-right">
                  <Link href={`/interns/${intern.id}`}>
                    <Button
                      variant="outline"
                      size="sm"
                      className="bg-transparent border-accent-secondary text-accent-secondary hover:bg-accent-secondary/10"
                    >
                      <Eye className="h-4 w-4 mr-2" />
                      View Profile
                    </Button>
                  </Link>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Card>
    </div>
  );
}
