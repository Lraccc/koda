'use client';

import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from '@/components/ui/dialog';
import { Eye, File as FileEdit } from 'lucide-react';
import { reports, interns } from '@/lib/mock-data';
import { useState } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

function getStatusBadgeClass(status: string) {
  switch (status) {
    case 'reviewed':
      return 'bg-accent-primary/10 text-accent-primary border-accent-primary/30';
    case 'pending':
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

export default function ReportsPage() {
  const [selectedReport, setSelectedReport] = useState<any>(null);
  const [isReviewModalOpen, setIsReviewModalOpen] = useState(false);
  const [reviewScore, setReviewScore] = useState('');
  const [reviewNote, setReviewNote] = useState('');

  const allReports = reports;
  const pendingReports = reports.filter((r) => r.status === 'pending');
  const reviewedReports = reports.filter((r) => r.status === 'reviewed');

  const getInternName = (internId: string) => {
    const intern = interns.find((i) => i.id === internId);
    return intern?.name || 'Unknown';
  };

  const performanceChartData = interns.map((intern) => ({
    name: intern.name.split(' ')[0],
    score: intern.score,
  }));

  const handleReview = (report: any) => {
    setSelectedReport(report);
    setReviewScore(report.score?.toString() || '');
    setReviewNote(report.coordinatorNote || '');
    setIsReviewModalOpen(true);
  };

  const handleSubmitReview = () => {
    setIsReviewModalOpen(false);
    setSelectedReport(null);
    setReviewScore('');
    setReviewNote('');
  };

  const ReportTable = ({ reportsList }: { reportsList: any[] }) => (
    <Table>
      <TableHeader>
        <TableRow className="border-border-color hover:bg-transparent">
          <TableHead className="text-text-muted font-mono text-label">
            Intern
          </TableHead>
          <TableHead className="text-text-muted font-mono text-label">
            Period
          </TableHead>
          <TableHead className="text-text-muted font-mono text-label">
            Submitted
          </TableHead>
          <TableHead className="text-text-muted font-mono text-label">
            Score
          </TableHead>
          <TableHead className="text-text-muted font-mono text-label">
            Status
          </TableHead>
          <TableHead className="text-text-muted font-mono text-label text-right">
            Actions
          </TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {reportsList.map((report, index) => (
          <TableRow
            key={report.id}
            className={`border-border-color ${index % 2 === 0 ? 'bg-bg-surface' : 'bg-bg-elevated/30'}`}
          >
            <TableCell className="font-medium text-text-primary">
              {getInternName(report.internId)}
            </TableCell>
            <TableCell className="text-text-muted">{report.period}</TableCell>
            <TableCell className="text-text-muted">
              {formatDate(report.submittedAt)}
            </TableCell>
            <TableCell className="font-mono text-text-primary">
              {report.score !== null ? `${report.score}%` : '-'}
            </TableCell>
            <TableCell>
              <Badge
                variant="outline"
                className={getStatusBadgeClass(report.status)}
              >
                {report.status}
              </Badge>
            </TableCell>
            <TableCell className="text-right">
              <div className="flex items-center justify-end gap-2">
                {report.status === 'pending' && (
                  <Button
                    variant="outline"
                    size="sm"
                    className="bg-transparent border-accent-primary text-accent-primary hover:bg-accent-primary/10"
                    onClick={() => handleReview(report)}
                  >
                    <FileEdit className="h-4 w-4 mr-2" />
                    Review
                  </Button>
                )}
                <Button
                  variant="outline"
                  size="sm"
                  className="bg-transparent border-accent-secondary text-accent-secondary hover:bg-accent-secondary/10"
                  onClick={() => handleReview(report)}
                >
                  <Eye className="h-4 w-4 mr-2" />
                  View
                </Button>
              </div>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );

  return (
    <div className="p-8">
      <div className="mb-8">
        <h1 className="text-4xl font-mono font-bold text-text-primary mb-2">
          Reports & Performance
        </h1>
        <p className="text-text-muted">
          Review submitted reports and track performance metrics
        </p>
      </div>

      <Card className="bg-bg-surface border-border-color overflow-hidden mb-6">
        <Tabs defaultValue="all" className="w-full">
          <div className="border-b border-border-color px-6 pt-4">
            <TabsList className="bg-bg-elevated border border-border-color">
              <TabsTrigger
                value="all"
                className="data-[state=active]:bg-accent-primary/10 data-[state=active]:text-accent-primary"
              >
                All Reports ({allReports.length})
              </TabsTrigger>
              <TabsTrigger
                value="pending"
                className="data-[state=active]:bg-accent-warning/10 data-[state=active]:text-accent-warning"
              >
                Pending Review ({pendingReports.length})
              </TabsTrigger>
              <TabsTrigger
                value="reviewed"
                className="data-[state=active]:bg-accent-primary/10 data-[state=active]:text-accent-primary"
              >
                Reviewed ({reviewedReports.length})
              </TabsTrigger>
            </TabsList>
          </div>

          <TabsContent value="all" className="m-0">
            <ReportTable reportsList={allReports} />
          </TabsContent>

          <TabsContent value="pending" className="m-0">
            <ReportTable reportsList={pendingReports} />
          </TabsContent>

          <TabsContent value="reviewed" className="m-0">
            <ReportTable reportsList={reviewedReports} />
          </TabsContent>
        </Tabs>
      </Card>

      <Card className="bg-bg-surface border-border-color p-6">
        <h2 className="text-xl font-mono font-semibold text-text-primary mb-4">
          Performance Overview
        </h2>
        <ResponsiveContainer width="100%" height={400}>
          <BarChart data={performanceChartData} layout="horizontal">
            <CartesianGrid strokeDasharray="3 3" stroke="#252830" />
            <XAxis
              type="number"
              stroke="#6B7280"
              style={{ fontSize: '12px', fontFamily: 'IBM Plex Mono' }}
              domain={[0, 100]}
            />
            <YAxis
              type="category"
              dataKey="name"
              stroke="#6B7280"
              style={{ fontSize: '12px', fontFamily: 'DM Sans' }}
              width={100}
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
            <Bar dataKey="score" fill="#4DFFA3" radius={[0, 4, 4, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </Card>

      <Dialog open={isReviewModalOpen} onOpenChange={setIsReviewModalOpen}>
        <DialogContent className="bg-bg-elevated border-border-color max-w-2xl max-h-[80vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle className="text-xl font-mono text-text-primary">
              {selectedReport?.status === 'pending' ? 'Review Report' : 'View Report'}
            </DialogTitle>
          </DialogHeader>

          {selectedReport && (
            <div className="space-y-4">
              <div>
                <p className="text-sm text-label text-text-muted mb-1">Intern</p>
                <p className="text-text-primary font-medium">
                  {getInternName(selectedReport.internId)}
                </p>
              </div>

              <div>
                <p className="text-sm text-label text-text-muted mb-1">Period</p>
                <p className="text-text-primary">{selectedReport.period}</p>
              </div>

              <div>
                <p className="text-sm text-label text-text-muted mb-2">
                  Report Content
                </p>
                <div className="p-4 bg-bg-base rounded-lg border border-border-color text-text-muted leading-relaxed">
                  {selectedReport.content}
                </div>
              </div>

              {selectedReport.status === 'pending' ? (
                <>
                  <div>
                    <label className="text-sm text-label text-text-muted mb-2 block">
                      Score (0-100)
                    </label>
                    <Input
                      type="number"
                      min="0"
                      max="100"
                      placeholder="Enter score"
                      value={reviewScore}
                      onChange={(e) => setReviewScore(e.target.value)}
                      className="bg-bg-base border-border-color text-text-primary"
                    />
                  </div>

                  <div>
                    <label className="text-sm text-label text-text-muted mb-2 block">
                      Coordinator Notes
                    </label>
                    <Textarea
                      placeholder="Add your feedback and comments..."
                      rows={4}
                      value={reviewNote}
                      onChange={(e) => setReviewNote(e.target.value)}
                      className="bg-bg-base border-border-color text-text-primary"
                    />
                  </div>
                </>
              ) : (
                <>
                  <div>
                    <p className="text-sm text-label text-text-muted mb-1">Score</p>
                    <p className="text-2xl font-mono font-bold text-accent-primary">
                      {selectedReport.score}%
                    </p>
                  </div>

                  {selectedReport.coordinatorNote && (
                    <div>
                      <p className="text-sm text-label text-text-muted mb-2">
                        Coordinator Notes
                      </p>
                      <div className="p-4 bg-bg-base rounded-lg border border-accent-primary/30 text-text-primary leading-relaxed">
                        {selectedReport.coordinatorNote}
                      </div>
                    </div>
                  )}
                </>
              )}
            </div>
          )}

          <DialogFooter>
            <Button
              variant="outline"
              onClick={() => setIsReviewModalOpen(false)}
              className="bg-transparent border-border-color text-text-muted"
            >
              Close
            </Button>
            {selectedReport?.status === 'pending' && (
              <Button
                onClick={handleSubmitReview}
                className="bg-accent-primary text-bg-base hover:bg-accent-primary/90"
              >
                Submit Review
              </Button>
            )}
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
}
