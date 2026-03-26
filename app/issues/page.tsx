'use client';

import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
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
import { ChevronDown, ChevronUp, GitPullRequest } from 'lucide-react';
import { issues } from '@/lib/mock-data';
import { useState } from 'react';

function getStatusBadgeClass(status: string) {
  switch (status) {
    case 'open':
      return 'bg-accent-secondary/10 text-accent-secondary border-accent-secondary/30';
    case 'closed':
      return 'bg-accent-primary/10 text-accent-primary border-accent-primary/30';
    case 'in-progress':
      return 'bg-accent-warning/10 text-accent-warning border-accent-warning/30';
    default:
      return 'bg-text-muted/10 text-text-muted border-text-muted/30';
  }
}

function formatDate(dateString: string) {
  const date = new Date(dateString);
  return date.toLocaleDateString('en-US', {
    month: 'short',
    day: 'numeric',
    year: 'numeric',
  });
}

function getStatusTimeline(issue: any) {
  const timeline = [
    { label: 'Opened', date: issue.openedAt, status: 'complete' },
    {
      label: 'Assigned',
      date: issue.openedAt,
      status: issue.assignee ? 'complete' : 'pending',
    },
    {
      label: 'In Progress',
      date: issue.updatedAt,
      status: issue.status === 'in-progress' || issue.status === 'closed' ? 'complete' : 'pending',
    },
    {
      label: 'Closed',
      date: issue.updatedAt,
      status: issue.status === 'closed' ? 'complete' : 'pending',
    },
  ];
  return timeline;
}

export default function IssuesPage() {
  const [statusFilter, setStatusFilter] = useState('all');
  const [assigneeFilter, setAssigneeFilter] = useState('all');
  const [repoFilter, setRepoFilter] = useState('all');
  const [expandedIssueId, setExpandedIssueId] = useState<string | null>(null);

  const uniqueAssignees = Array.from(new Set(issues.map((i) => i.assignee)));
  const uniqueRepos = Array.from(new Set(issues.map((i) => i.repo)));

  const filteredIssues = issues.filter((issue) => {
    const matchesStatus = statusFilter === 'all' || issue.status === statusFilter;
    const matchesAssignee = assigneeFilter === 'all' || issue.assignee === assigneeFilter;
    const matchesRepo = repoFilter === 'all' || issue.repo === repoFilter;
    return matchesStatus && matchesAssignee && matchesRepo;
  });

  const toggleExpanded = (issueId: string) => {
    setExpandedIssueId(expandedIssueId === issueId ? null : issueId);
  };

  return (
    <div className="p-8">
      <div className="mb-8">
        <h1 className="text-4xl font-mono font-bold text-text-primary mb-2">
          Issue Tracking
        </h1>
        <p className="text-text-muted">
          Monitor and manage GitHub issues across all repositories
        </p>
      </div>

      <Card className="bg-bg-surface border-border-color p-6 mb-6">
        <div className="flex gap-4 items-center">
          <Select value={statusFilter} onValueChange={setStatusFilter}>
            <SelectTrigger className="w-48 bg-bg-elevated border-border-color text-text-primary">
              <SelectValue placeholder="Filter by status" />
            </SelectTrigger>
            <SelectContent className="bg-bg-elevated border-border-color">
              <SelectItem value="all">All Status</SelectItem>
              <SelectItem value="open">Open</SelectItem>
              <SelectItem value="closed">Closed</SelectItem>
              <SelectItem value="in-progress">In Progress</SelectItem>
            </SelectContent>
          </Select>

          <Select value={assigneeFilter} onValueChange={setAssigneeFilter}>
            <SelectTrigger className="w-48 bg-bg-elevated border-border-color text-text-primary">
              <SelectValue placeholder="Filter by assignee" />
            </SelectTrigger>
            <SelectContent className="bg-bg-elevated border-border-color">
              <SelectItem value="all">All Assignees</SelectItem>
              {uniqueAssignees.map((assignee) => (
                <SelectItem key={assignee} value={assignee}>
                  {assignee}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>

          <Select value={repoFilter} onValueChange={setRepoFilter}>
            <SelectTrigger className="w-64 bg-bg-elevated border-border-color text-text-primary">
              <SelectValue placeholder="Filter by repository" />
            </SelectTrigger>
            <SelectContent className="bg-bg-elevated border-border-color">
              <SelectItem value="all">All Repositories</SelectItem>
              {uniqueRepos.map((repo) => (
                <SelectItem key={repo} value={repo}>
                  {repo}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      </Card>

      <Card className="bg-bg-surface border-border-color overflow-hidden">
        <Table>
          <TableHeader>
            <TableRow className="border-border-color hover:bg-transparent">
              <TableHead className="text-text-muted font-mono text-label w-12"></TableHead>
              <TableHead className="text-text-muted font-mono text-label w-16">
                #
              </TableHead>
              <TableHead className="text-text-muted font-mono text-label">
                Title
              </TableHead>
              <TableHead className="text-text-muted font-mono text-label">
                Repository
              </TableHead>
              <TableHead className="text-text-muted font-mono text-label">
                Assignee
              </TableHead>
              <TableHead className="text-text-muted font-mono text-label">
                Status
              </TableHead>
              <TableHead className="text-text-muted font-mono text-label">
                Labels
              </TableHead>
              <TableHead className="text-text-muted font-mono text-label">
                Opened
              </TableHead>
              <TableHead className="text-text-muted font-mono text-label">
                Updated
              </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {filteredIssues.map((issue, index) => {
              const isExpanded = expandedIssueId === issue.id;
              const timeline = getStatusTimeline(issue);

              return (
                <>
                  <TableRow
                    key={issue.id}
                    className={`border-border-color cursor-pointer hover:bg-bg-elevated/50 ${
                      index % 2 === 0 ? 'bg-bg-surface' : 'bg-bg-elevated/30'
                    }`}
                    onClick={() => toggleExpanded(issue.id)}
                  >
                    <TableCell>
                      {isExpanded ? (
                        <ChevronUp className="h-4 w-4 text-text-muted" />
                      ) : (
                        <ChevronDown className="h-4 w-4 text-text-muted" />
                      )}
                    </TableCell>
                    <TableCell className="font-mono text-text-muted">
                      {issue.number}
                    </TableCell>
                    <TableCell className="font-medium text-text-primary max-w-xs">
                      {issue.title}
                    </TableCell>
                    <TableCell className="font-mono text-text-muted text-sm">
                      {issue.repo}
                    </TableCell>
                    <TableCell>
                      <div className="flex items-center gap-2">
                        <Avatar className="h-6 w-6 bg-bg-base border border-border-color">
                          <AvatarFallback className="bg-accent-primary/10 text-accent-primary font-mono text-xs">
                            {issue.assigneeAvatar}
                          </AvatarFallback>
                        </Avatar>
                        <span className="text-sm text-text-primary">
                          {issue.assignee}
                        </span>
                      </div>
                    </TableCell>
                    <TableCell>
                      <Badge
                        variant="outline"
                        className={getStatusBadgeClass(issue.status)}
                      >
                        {issue.status}
                      </Badge>
                    </TableCell>
                    <TableCell>
                      <div className="flex flex-wrap gap-1">
                        {issue.labels.slice(0, 2).map((label) => (
                          <Badge
                            key={label}
                            variant="outline"
                            className="text-xs bg-transparent border-text-muted/30 text-text-muted"
                          >
                            {label}
                          </Badge>
                        ))}
                        {issue.labels.length > 2 && (
                          <Badge
                            variant="outline"
                            className="text-xs bg-transparent border-text-muted/30 text-text-muted"
                          >
                            +{issue.labels.length - 2}
                          </Badge>
                        )}
                      </div>
                    </TableCell>
                    <TableCell className="text-text-muted text-sm">
                      {formatDate(issue.openedAt)}
                    </TableCell>
                    <TableCell className="text-text-muted text-sm">
                      {formatDate(issue.updatedAt)}
                    </TableCell>
                  </TableRow>

                  {isExpanded && (
                    <TableRow className="border-border-color bg-bg-elevated">
                      <TableCell colSpan={9} className="p-6">
                        <div className="space-y-4">
                          <div>
                            <h3 className="text-sm font-mono font-semibold text-text-primary mb-2 text-label">
                              Issue Body
                            </h3>
                            <div className="p-4 bg-bg-base rounded-lg border border-border-color text-text-muted leading-relaxed">
                              {issue.body}
                            </div>
                          </div>

                          <div>
                            <h3 className="text-sm font-mono font-semibold text-text-primary mb-3 text-label">
                              Timeline
                            </h3>
                            <div className="flex items-center gap-2">
                              {timeline.map((step, idx) => (
                                <div key={idx} className="flex items-center flex-1">
                                  <div className="flex flex-col items-center">
                                    <div
                                      className={`w-8 h-8 rounded-full border-2 flex items-center justify-center ${
                                        step.status === 'complete'
                                          ? 'bg-accent-primary border-accent-primary'
                                          : 'bg-bg-base border-text-muted'
                                      }`}
                                    >
                                      {step.status === 'complete' && (
                                        <GitPullRequest className="h-4 w-4 text-bg-base" />
                                      )}
                                    </div>
                                    <div className="text-xs text-text-muted mt-2 text-center">
                                      {step.label}
                                    </div>
                                  </div>
                                  {idx < timeline.length - 1 && (
                                    <div
                                      className={`flex-1 h-0.5 mb-6 ${
                                        step.status === 'complete'
                                          ? 'bg-accent-primary'
                                          : 'bg-text-muted/30'
                                      }`}
                                    />
                                  )}
                                </div>
                              ))}
                            </div>
                          </div>

                          <div>
                            <h3 className="text-sm font-mono font-semibold text-text-primary mb-2 text-label">
                              All Labels
                            </h3>
                            <div className="flex flex-wrap gap-2">
                              {issue.labels.map((label) => (
                                <Badge
                                  key={label}
                                  variant="outline"
                                  className="bg-transparent border-accent-primary/30 text-accent-primary"
                                >
                                  {label}
                                </Badge>
                              ))}
                            </div>
                          </div>
                        </div>
                      </TableCell>
                    </TableRow>
                  )}
                </>
              );
            })}
          </TableBody>
        </Table>
      </Card>
    </div>
  );
}
