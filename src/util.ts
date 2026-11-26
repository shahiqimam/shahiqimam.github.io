import type { ProjectStatus } from './content';

export const esc = (s: string) =>
  s.replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' })[c]!);

export function statusBadge(s: ProjectStatus) {
  if (s === 'private') return ' <span class="badge badge-private">Private code</span>';
  if (s === 'wip') return ' <span class="badge badge-wip">In progress</span>';
  return '';
}
