'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Github, Shield, Users, Briefcase, FileText, Zap } from 'lucide-react';

type UserRole = 'admin' | 'coordinator' | 'team-lead' | 'intern';

const roleDescriptions: Record<UserRole, { name: string; description: string; icon: React.ReactNode; color: string; permissions: string[] }> = {
  admin: {
    name: 'Admin',
    description: 'Full system access and user management',
    icon: <Shield className="w-8 h-8" />,
    color: 'from-red-500/20 to-red-600/20 border-red-500/30 hover:border-red-500/50',
    permissions: ['User Management', 'System Settings', 'Analytics'],
  },
  coordinator: {
    name: 'Coordinator',
    description: 'Manage interns, reports, and oversight',
    icon: <Users className="w-8 h-8" />,
    color: 'from-blue-500/20 to-blue-600/20 border-blue-500/30 hover:border-blue-500/50',
    permissions: ['Intern Management', 'Report Review', 'Performance Tracking'],
  },
  'team-lead': {
    name: 'Team Lead',
    description: 'Lead and manage team members',
    icon: <Briefcase className="w-8 h-8" />,
    color: 'from-purple-500/20 to-purple-600/20 border-purple-500/30 hover:border-purple-500/50',
    permissions: ['Team Management', 'Issue Tracking', 'Progress Monitoring'],
  },
  intern: {
    name: 'Intern',
    description: 'View assignments and submit reports',
    icon: <FileText className="w-8 h-8" />,
    color: 'from-green-500/20 to-green-600/20 border-green-500/30 hover:border-green-500/50',
    permissions: ['View Assignments', 'Submit Reports', 'Track Progress'],
  },
};

export default function LoginPage() {
  const [selectedRole, setSelectedRole] = useState<UserRole | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleRoleSelection = (role: UserRole) => {
    setIsLoading(true);
    localStorage.setItem('selectedRole', role);
    setTimeout(() => {
      window.location.href = '/dashboard';
    }, 500);
  };

  return (
    <div suppressHydrationWarning className="min-h-screen bg-gradient-to-br from-bg-surface via-bg-elevated to-bg-surface overflow-hidden flex items-center justify-center">
      {/* Animated background elements */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-accent-primary/5 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent-secondary/5 rounded-full blur-3xl animate-pulse" />
      </div>

      <div className="relative w-full max-w-4xl px-4 py-8">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-accent-primary/20 to-accent-primary/10 mb-6">
            <span className="text-3xl font-mono font-bold text-accent-primary">K</span>
          </div>
          <h1 className="text-5xl md:text-6xl font-mono font-bold text-text-primary mb-3">
            KODA
          </h1>
          <p className="text-lg text-accent-primary font-semibold mb-2 tracking-wide">
            Correlated Evidence. Verified Progress.
          </p>
          <p className="text-text-muted font-mono text-sm">
            Knowledge, Oversight, and Development Analytics
          </p>
        </div>

        {/* Login Card */}
        <div className="rounded-2xl border border-border-color/30 bg-gradient-to-b from-bg-elevated/50 to-bg-surface/50 backdrop-blur-md p-8 shadow-xl mb-8">
          <div className="mb-8">
            <p className="text-center text-text-primary text-lg font-semibold mb-2">
              Welcome to KODA
            </p>
            <p className="text-center text-text-muted text-sm">
              Sign in with your GitHub account to get started
            </p>
          </div>

          {/* Login Button */}
          <Button
            onClick={() => {
              setIsLoading(true);
              // For demo purposes, redirect to production-ready login
              // In production, this would redirect to GitHub OAuth flow
              setTimeout(() => {
                // For now, just close the loading state since we'll use demo selection below
                setIsLoading(false);
              }, 500);
            }}
            disabled={isLoading}
            className={`w-full px-6 py-3 rounded-xl font-semibold text-lg flex items-center justify-center gap-3 transition-all duration-300 ${
              !isLoading
                ? 'bg-gradient-to-r from-accent-primary to-accent-primary/80 hover:shadow-lg hover:shadow-accent-primary/20 text-bg-surface hover:scale-105'
                : 'bg-accent-primary/50 text-bg-surface cursor-not-allowed'
            }`}
          >
            <Github className="w-5 h-5" />
            {isLoading ? 'Signing in...' : 'Continue with GitHub'}
          </Button>

          {/* Info Message */}
          <div className="mt-6 pt-6 border-t border-border-color/20">
            <p className="text-xs text-text-muted/70 text-center">
              By signing in, you agree to KODA's Terms of Service and Privacy Policy
            </p>
          </div>
        </div>

        {/* Demo Section */}
        <div className="rounded-2xl border border-border-color/30 bg-gradient-to-b from-bg-elevated/50 to-bg-surface/50 backdrop-blur-md p-8 shadow-xl">
          <div className="mb-8">
            <div className="flex items-center justify-center gap-2 mb-4">
              <div className="flex-1 h-px bg-gradient-to-r from-transparent to-border-color/30" />
              <p className="text-xs text-text-muted/60 px-3 uppercase tracking-widest font-semibold">
                🚀 Demo Mode
              </p>
              <div className="flex-1 h-px bg-gradient-to-l from-transparent to-border-color/30" />
            </div>
            <p className="text-center text-text-primary text-lg font-semibold mb-2">
              Experience Different Roles
            </p>
            <p className="text-center text-text-muted text-sm">
              Select a role below to explore KODA's features
            </p>
          </div>

          {/* Role Selection Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3">
            {Object.entries(roleDescriptions).map(([role, { name, description, icon, color, permissions }]) => (
              <button
                key={role}
                onClick={() => handleRoleSelection(role as UserRole)}
                className={`group relative p-6 rounded-xl border-2 transition-all duration-300 overflow-hidden ${
                  selectedRole === role
                    ? `bg-gradient-to-b ${color.split(' ')[0]} ${color.split(' ')[1]} border-accent-primary`
                    : `bg-gradient-to-b ${color} border-border-color hover:border-border-color`
                } ${isLoading ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'}`}
                disabled={isLoading}
              >
                {/* Hover effect background */}
                <div className={`absolute inset-0 bg-gradient-to-b ${color} opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />
                
                <div className="relative z-10">
                  {/* Icon */}
                  <div className={`mb-4 text-accent-primary transition-transform duration-300 ${
                    selectedRole === role ? 'scale-110' : 'group-hover:scale-105'
                  }`}>
                    {icon}
                  </div>

                  {/* Title and Description */}
                  <h3 className="font-semibold text-text-primary text-left mb-2 text-base">
                    {name}
                  </h3>
                  <p className="text-xs text-text-muted text-left mb-3">
                    {description}
                  </p>

                  {/* Permissions */}
                  {selectedRole === role && (
                    <div className="space-y-2 pt-3 border-t border-border-color mt-3">
                      {permissions.map((perm, idx) => (
                        <div key={idx} className="flex items-center gap-2 text-xs text-text-muted">
                          <Zap className="w-3 h-3 text-accent-primary flex-shrink-0" />
                          {perm}
                        </div>
                      ))}
                    </div>
                  )}
                </div>

                {/* Selection indicator */}
                {selectedRole === role && (
                  <div className="absolute top-3 right-3 w-5 h-5 rounded-full bg-accent-primary flex items-center justify-center">
                    <div className="w-2 h-2 rounded-full bg-bg-surface" />
                  </div>
                )}
              </button>
            ))}
          </div>

          {/* Quick enter button */}
          {selectedRole && (
            <Button
              onClick={() => handleRoleSelection(selectedRole)}
              disabled={isLoading}
              className="w-full mt-6 px-6 py-3 rounded-xl font-semibold text-lg flex items-center justify-center gap-3 transition-all duration-300 bg-gradient-to-r from-accent-primary to-accent-primary/80 hover:shadow-lg hover:shadow-accent-primary/20 text-bg-surface hover:scale-105"
            >
              {isLoading ? 'Loading...' : 'Enter as ' + roleDescriptions[selectedRole].name}
            </Button>
          )}
        </div>

        {/* Footer */}
        <div className="mt-8 text-center">
          <p className="text-xs text-text-muted/60">
            © 2024 KODA. All rights reserved.
          </p>
        </div>
      </div>
    </div>
  );
}
