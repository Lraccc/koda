'use client';

import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Button } from '@/components/ui/button';
import {
  ChevronDown,
  ChevronUp,
  GitPullRequest,
  Calendar,
  FileText,
  Award,
} from 'lucide-react';
import {
  getInternById,
  getIssuesByInternId,
  getReportsByInternId,
} from '@/lib/mock-data';
import { useState } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { notFound } from 'next/navigation';

function getStatusBadgeClass(status: string) {
  switch (status) {
    case 'open':
      return 'bg-accent-secondary/10 text-accent-secondary border-accent-secondary/30';
    case 'closed':
      return 'bg-accent-primary/10 text-accent-primary border-accent-primary/30';
    case 'in-progress':
      return 'bg-accent-warning/10 text-accent-warning border-accent-warning/30';
    case 'reviewed':
      return 'bg-accent-primary/10 text-accent-primary border-accent-primary/30';
    case 'pending':
      return 'bg-text-muted/10 text-text-muted border-text-muted/30';
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

export default function InternProfilePage({ params }: { params: { id: string } }) {
  const intern = getInternById(params.id);
  const [expandedReportId, setExpandedReportId] = useState<string | null>(null);

  if (!intern) {
    notFound();
  }

  const reports = getReportsByInternId(params.id);
  const issues = getIssuesByInternId(params.id);
  const weeklyReports = reports.filter((r) => r.type === 'weekly');
  const dailyLogs = reports.filter((r) => r.type === 'daily');

  const issueActivityData = [
    { week: 'W1', count: 2 },
    { week: 'W2', count: 3 },
    { week: 'W3', count: 4 },
    { week: 'W4', count: 3 },
    { week: 'W5', count: 5 },
    { week: 'W6', count: 4 },
  ];

  return (
    <div className="p-8">
      <div className="mb-8">
        <div className="flex items-start gap-4 mb-4">
          <Avatar className="h-16 w-16 bg-bg-elevated border-2 border-border-color">
            <AvatarFallback className="bg-accent-primary/10 text-accent-primary font-mono font-bold text-xl">
              {intern.avatarInitials}
            </AvatarFallback>
          </Avatar>
          <div>
            <h1 className="text-4xl font-mono font-bold text-text-primary mb-1">
              {intern.name}
            </h1>
            <p className="text-text-muted mb-2">{intern.role}</p>
            <div className="flex items-center gap-3">
              <span className="text-sm text-text-muted font-mono">
                @{intern.github}
              </span>
              <Badge
                variant="outline"
                className="bg-accent-primary/10 text-accent-primary border-accent-primary/30"
              >
                <Award className="h-3 w-3 mr-1" />
                Score: {intern.score}%
              </Badge>
            </div>
          </div>
        </div>
        <div className="flex gap-4 text-sm">
          <div className="flex items-center gap-2 text-text-muted">
            <Calendar className="h-4 w-4" />
            <span>{intern.assignedPeriod}</span>
          </div>
          <div className="flex items-center gap-2 text-text-muted">
            <FileText className="h-4 w-4" />
            <span>{reports.length} reports submitted</span>
          </div>
          <div className="flex items-center gap-2 text-text-muted">
            <GitPullRequest className="h-4 w-4" />
            <span>{issues.length} GitHub issues</span>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card className="bg-bg-surface border-border-color p-6 h-[800px] flex flex-col">
          <h2 className="text-xl font-mono font-semibold text-text-primary mb-4">
            Submitted Reports
          </h2>

          <Tabs defaultValue="weekly" className="flex-1 flex flex-col">
            <TabsList className="bg-bg-elevated border border-border-color mb-4">
              <TabsTrigger
                value="weekly"
                className="data-[state=active]:bg-accent-primary/10 data-[state=active]:text-accent-primary"
              >
                Weekly Reports
              </TabsTrigger>
              <TabsTrigger
                value="daily"
                className="data-[state=active]:bg-accent-primary/10 data-[state=active]:text-accent-primary"
              >
                Daily Logs
              </TabsTrigger>
            </TabsList>

            <TabsContent value="weekly" className="flex-1 overflow-y-auto space-y-4">
              {weeklyReports.length === 0 ? (
                <div className="text-center text-text-muted py-8">
                  No weekly reports yet
                </div>
              ) : (
                weeklyReports.map((report) => (
                  <div
                    key={report.id}
                    className="p-4 bg-bg-elevated rounded-lg border border-border-color"
                  >
                    <div className="flex items-start justify-between mb-3">
                      <div>
                        <p className="text-sm font-semibold text-text-primary">
                          {report.period}
                        </p>
                        <p className="text-xs text-text-muted mt-1">
                          Submitted {formatDate(report.submittedAt)}
                        </p>
                      </div>
                      <div className="flex items-center gap-2">
                        {report.score !== null && (
                          <Badge
                            variant="outline"
                            className="bg-accent-primary/10 text-accent-primary border-accent-primary/30"
                          >
                            {report.score}%
                          </Badge>
                        )}
                        <Badge
                          variant="outline"
                          className={getStatusBadgeClass(report.status)}
                        >
                          {report.status}
                        </Badge>
                      </div>
                    </div>

                    {expandedReportId === report.id ? (
                      <>
                        <div className="text-sm text-text-muted mb-3 leading-relaxed">
                          {report.content}
                        </div>
                        {report.coordinatorNote && (
                          <div className="p-3 bg-bg-base rounded border border-accent-primary/30">
                            <p className="text-xs text-label text-accent-primary mb-1">
                              Coordinator Note
                            </p>
                            <p className="text-sm text-text-primary">
                              {report.coordinatorNote}
                            </p>
                          </div>
                        )}
                        <Button
                          variant="ghost"
                          size="sm"
                          className="mt-3 text-accent-secondary"
                          onClick={() => setExpandedReportId(null)}
                        >
                          <ChevronUp className="h-4 w-4 mr-1" />
                          Hide Details
                        </Button>
                      </>
                    ) : (
                      <Button
                        variant="ghost"
                        size="sm"
                        className="text-accent-secondary"
                        onClick={() => setExpandedReportId(report.id)}
                      >
                        <ChevronDown className="h-4 w-4 mr-1" />
                        View Full Report
                      </Button>
                    )}
                  </div>
                ))
              )}
            </TabsContent>

            <TabsContent value="daily" className="flex-1 overflow-y-auto">
              <div className="text-center text-text-muted py-8">
                No daily logs yet
              </div>
            </TabsContent>
          </Tabs>
        </Card>

        <Card className="bg-bg-surface border-border-color p-6 h-[800px] flex flex-col">
          <h2 className="text-xl font-mono font-semibold text-text-primary mb-4">
            GitHub Activity
          </h2>
          <p className="text-label text-text-muted mb-4">
            Linked Issues — Same Period
          </p>

          <div className="flex-1 overflow-y-auto space-y-3 mb-6">
            {issues.length === 0 ? (
              <div className="p-6 bg-bg-elevated rounded-lg border border-border-color text-center">
                <GitPullRequest className="h-12 w-12 text-text-muted mx-auto mb-3" />
                <p className="text-text-muted">
                  No GitHub issues linked for this period.
                </p>
              </div>
            ) : (
              issues.map((issue) => (
                <div
                  key={issue.id}
                  className="p-4 bg-bg-elevated rounded-lg border border-border-color hover:border-accent-primary/30 transition-colors"
                >
                  <div className="flex items-start justify-between mb-2">
                    <div className="flex items-center gap-2">
                      <GitPullRequest className="h-4 w-4 text-text-muted flex-shrink-0" />
                      <span className="text-xs font-mono text-text-muted">
                        #{issue.number}
                      </span>
                    </div>
                    <Badge
                      variant="outline"
                      className={getStatusBadgeClass(issue.status)}
                    >
                      {issue.status}
                    </Badge>
                  </div>
                  <h3 className="text-sm font-semibold text-text-primary mb-2">
                    {issue.title}
                  </h3>
                  <div className="flex items-center gap-2 text-xs text-text-muted mb-2">
                    <span className="font-mono">{issue.repo}</span>
                  </div>
                  <div className="flex flex-wrap gap-1">
                    {issue.labels.map((label) => (
                      <Badge
                        key={label}
                        variant="outline"
                        className="text-xs bg-transparent border-text-muted/30 text-text-muted"
                      >
                        {label}
                      </Badge>
                    ))}
                  </div>
                  <div className="mt-2 pt-2 border-t border-border-color text-xs text-text-muted">
                    Opened {formatDate(issue.openedAt)} • Updated{' '}
                    {formatDate(issue.updatedAt)}
                  </div>
                </div>
              ))
            )}
          </div>

          <div>
            <h3 className="text-sm font-mono font-semibold text-text-primary mb-3">
              Issue Activity Per Week
            </h3>
            <ResponsiveContainer width="100%" height={150}>
              <BarChart data={issueActivityData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#252830" />
                <XAxis
                  dataKey="week"
                  stroke="#6B7280"
                  style={{ fontSize: '12px', fontFamily: 'IBM Plex Mono' }}
                />
                <YAxis
                  stroke="#6B7280"
                  style={{ fontSize: '12px', fontFamily: 'IBM Plex Mono' }}
                />
                <Tooltip
                  contentStyle={{
                    backgroundColor: '#1C2029',
                    border: '1px solid #252830',
                    borderRadius: '8px',
                    fontFamily: 'DM Sans',
                  }}
                  labelStyle={{ color: '#E8EAF0' }}
                />
                <Bar dataKey="count" fill="#4DFFA3" radius={[4, 4, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </Card>
      </div>
    </div>
  );
}
