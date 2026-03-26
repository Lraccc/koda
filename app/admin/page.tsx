'use client';

import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
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
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from '@/components/ui/dialog';
import { UserPlus, CreditCard as Edit, Ban, Mail } from 'lucide-react';
import { users } from '@/lib/mock-data';
import { useState } from 'react';

function getRoleBadgeClass(role: string) {
  switch (role) {
    case 'admin':
      return 'bg-accent-danger/10 text-accent-danger border-accent-danger/30';
    case 'coordinator':
      return 'bg-accent-secondary/10 text-accent-secondary border-accent-secondary/30';
    case 'team-lead':
      return 'bg-accent-warning/10 text-accent-warning border-accent-warning/30';
    case 'intern':
      return 'bg-accent-primary/10 text-accent-primary border-accent-primary/30';
    default:
      return 'bg-text-muted/10 text-text-muted border-text-muted/30';
  }
}

function getStatusBadgeClass(status: string) {
  switch (status) {
    case 'active':
      return 'bg-accent-primary/10 text-accent-primary border-accent-primary/30';
    case 'pending':
      return 'bg-accent-warning/10 text-accent-warning border-accent-warning/30';
    case 'inactive':
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

export default function AdminPage() {
  const [isAddUserModalOpen, setIsAddUserModalOpen] = useState(false);
  const [newUserGithub, setNewUserGithub] = useState('');
  const [newUserRole, setNewUserRole] = useState('intern');

  const handleAddUser = () => {
    setIsAddUserModalOpen(false);
    setNewUserGithub('');
    setNewUserRole('intern');
  };

  return (
    <div className="p-8">
      <div className="mb-8">
        <div className="flex items-start justify-between">
          <div>
            <h1 className="text-4xl font-mono font-bold text-text-primary mb-2">
              User Management
            </h1>
            <p className="text-text-muted">
              Manage user roles, permissions, and access control
            </p>
          </div>
          <Button
            onClick={() => setIsAddUserModalOpen(true)}
            className="bg-accent-primary text-bg-base hover:bg-accent-primary/90"
          >
            <UserPlus className="h-4 w-4 mr-2" />
            Add User
          </Button>
        </div>
      </div>

      <Card className="bg-bg-surface border-border-color overflow-hidden">
        <Table>
          <TableHeader>
            <TableRow className="border-border-color hover:bg-transparent">
              <TableHead className="text-text-muted font-mono text-label">
                Name
              </TableHead>
              <TableHead className="text-text-muted font-mono text-label">
                GitHub
              </TableHead>
              <TableHead className="text-text-muted font-mono text-label">
                Role
              </TableHead>
              <TableHead className="text-text-muted font-mono text-label">
                Status
              </TableHead>
              <TableHead className="text-text-muted font-mono text-label">
                Joined
              </TableHead>
              <TableHead className="text-text-muted font-mono text-label text-right">
                Actions
              </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {users.map((user, index) => (
              <TableRow
                key={user.id}
                className={`border-border-color ${index % 2 === 0 ? 'bg-bg-surface' : 'bg-bg-elevated/30'}`}
              >
                <TableCell>
                  <div className="flex items-center gap-3">
                    <div className="h-8 w-8 rounded-full bg-accent-primary/10 border border-accent-primary/30 flex items-center justify-center">
                      <span className="text-xs font-mono font-semibold text-accent-primary">
                        {user.avatarInitials}
                      </span>
                    </div>
                    <span className="font-medium text-text-primary">
                      {user.name}
                    </span>
                  </div>
                </TableCell>
                <TableCell className="font-mono text-text-muted">
                  @{user.github}
                </TableCell>
                <TableCell>
                  <Badge
                    variant="outline"
                    className={getRoleBadgeClass(user.role)}
                  >
                    {user.role.toUpperCase()}
                  </Badge>
                </TableCell>
                <TableCell>
                  <Badge
                    variant="outline"
                    className={getStatusBadgeClass(user.status)}
                  >
                    {user.status}
                  </Badge>
                </TableCell>
                <TableCell className="text-text-muted">
                  {formatDate(user.joinedAt)}
                </TableCell>
                <TableCell className="text-right">
                  <div className="flex items-center justify-end gap-2">
                    {user.status === 'pending' ? (
                      <Button
                        variant="outline"
                        size="sm"
                        className="bg-transparent border-accent-secondary text-accent-secondary hover:bg-accent-secondary/10"
                      >
                        <Mail className="h-4 w-4 mr-2" />
                        Resend Invite
                      </Button>
                    ) : (
                      <>
                        <Button
                          variant="outline"
                          size="sm"
                          className="bg-transparent border-accent-secondary text-accent-secondary hover:bg-accent-secondary/10"
                        >
                          <Edit className="h-4 w-4 mr-2" />
                          Edit Role
                        </Button>
                        <Button
                          variant="outline"
                          size="sm"
                          className="bg-transparent border-accent-danger text-accent-danger hover:bg-accent-danger/10"
                        >
                          <Ban className="h-4 w-4 mr-2" />
                          Revoke
                        </Button>
                      </>
                    )}
                  </div>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Card>

      <Dialog open={isAddUserModalOpen} onOpenChange={setIsAddUserModalOpen}>
        <DialogContent className="bg-bg-elevated border-border-color">
          <DialogHeader>
            <DialogTitle className="text-xl font-mono text-text-primary">
              Add New User
            </DialogTitle>
          </DialogHeader>

          <div className="space-y-4 py-4">
            <div>
              <label className="text-sm text-label text-text-muted mb-2 block">
                GitHub Username
              </label>
              <Input
                placeholder="Enter GitHub username"
                value={newUserGithub}
                onChange={(e) => setNewUserGithub(e.target.value)}
                className="bg-bg-base border-border-color text-text-primary"
              />
            </div>

            <div>
              <label className="text-sm text-label text-text-muted mb-2 block">
                Role
              </label>
              <Select value={newUserRole} onValueChange={setNewUserRole}>
                <SelectTrigger className="bg-bg-base border-border-color text-text-primary">
                  <SelectValue placeholder="Select role" />
                </SelectTrigger>
                <SelectContent className="bg-bg-elevated border-border-color">
                  <SelectItem value="intern">Intern</SelectItem>
                  <SelectItem value="coordinator">Coordinator</SelectItem>
                  <SelectItem value="team-lead">Team Lead</SelectItem>
                  <SelectItem value="admin">Admin</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="p-4 bg-bg-base rounded-lg border border-border-color">
              <p className="text-xs text-text-muted">
                An invitation email will be sent to the user's GitHub-associated
                email address. They will need to authenticate via GitHub to
                complete their account setup.
              </p>
            </div>
          </div>

          <DialogFooter>
            <Button
              variant="outline"
              onClick={() => setIsAddUserModalOpen(false)}
              className="bg-transparent border-border-color text-text-muted"
            >
              Cancel
            </Button>
            <Button
              onClick={handleAddUser}
              className="bg-accent-primary text-bg-base hover:bg-accent-primary/90"
            >
              Send Invitation
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
}
