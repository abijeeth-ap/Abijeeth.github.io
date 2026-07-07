# React Portfolio Template

A fast, responsive, and data-driven software engineering portfolio built with React, Vite, TypeScript, and plain CSS. It is designed for GitHub user sites such as `username.github.io`.

The template requires no UI framework, deployment token, repository secret, committed build output, or second deployment repository.

## Use this template

> [!IMPORTANT]
> **Before deploying, open the GitHub repository and go to `Settings → Pages → Build and deployment`. Change `Source` from `Deploy from a branch` to `GitHub Actions`.**
>
> **This is required. If branch deployment remains enabled, GitHub may publish the uncompiled React/TypeScript source instead of the Vite production build, resulting in a blank website.**

1. Fork this repository or select **Use this template** on GitHub.
2. Name the repository `<your-username>.github.io`.
3. Clone the repository.
4. Install dependencies:

   ```bash
   npm install
   ```

5. Start the development server:

   ```bash
   npm run dev
   ```

6. Edit the data and configuration described below.
7. Push the changes to `main`.

## Edit personal content

All personal portfolio content is stored in `src/data/`:

- `profile.ts` — name, role, summary, contact information, resume URL, hero technologies, and reusable profile copy
- `projects.ts` — portfolio projects
- `skills.ts` — grouped technical skills
- `experience.ts` — internships and employment
- `education.ts` — education history
- `achievements.ts` — awards and competitive-programming results
- `certifications.ts` — certifications
- `links.ts` — social and contact links
- `repositories.ts` — highlighted GitHub repositories

Components render these arrays automatically. Adding a new item to an array adds it to the website without creating another component.

## Add a project

Open `src/data/projects.ts` and add another object:

```ts
{
  id: 'unique-project-id',
  title: 'Project Name',
  category: 'Full Stack',
  shortDescription: 'A concise recruiter-friendly description.',
  description: 'A longer project description.',
  techStack: ['React', 'TypeScript'],
  highlights: ['Important capability', 'Measurable result'],
  githubUrl: 'https://github.com/username/project',
  liveUrl: 'https://example.com',
  featured: true,
  status: 'Completed',
}
```

Only projects with `featured: true` appear in the Featured Projects section.

## Show or hide sections

Edit `src/config/sections.ts`:

```ts
export const sections = {
  about: true,
  skills: true,
  projects: true,
  experience: true,
  education: true,
  achievements: true,
  certifications: true,
  contact: true,
}
```

Set a value to `false` to remove that section and its navigation link.

Other reusable configuration lives in:

- `src/config/site.ts` — site and GitHub Pages settings
- `src/config/navigation.ts` — navigation labels and order
- `src/config/theme.ts` — documented theme values

## Replace the resume

Replace:

```text
public/resume/Arul-Ananth-Resume.pdf
```

If the filename changes, update `resumeUrl` in `src/data/profile.ts`. Resume links open the PDF in a new browser tab so the browser can preview, search, print, or download it.

## Add certificates

Put public certificate files in:

```text
public/certificates/
```

Then reference them from `src/data/certifications.ts`:

```ts
{
  title: 'Certificate Name',
  issuer: 'Issuer Name',
  year: '2026',
  certificateUrl: '/certificates/certificate-name.pdf',
  verificationUrl: 'https://optional-public-verification-link.com',
}
```

Certificate links open in a new browser tab so recruiters can preview PDFs/images using the browser's built-in viewer. Do not add sensitive documents to `public/certificates/`; files in `public/` are publicly accessible on the deployed website.

## Customize colors

Edit the CSS variables at the top of `src/styles/global.css`. Keep `src/config/theme.ts` synchronized so template users can inspect the theme values from one typed configuration module.

No component library or CSS framework is required.

## Deploy to GitHub Pages

The included `.github/workflows/deploy.yml` runs whenever a commit is pushed to `main`. It:

1. Installs dependencies with `npm ci`.
2. Builds the Vite application into `dist/`.
3. Uploads `dist/` as a GitHub Pages artifact.
4. Deploys that artifact with GitHub's official Pages action.

For the first deployment, open the repository on GitHub and select:

**Settings → Pages → Build and deployment → Source → GitHub Actions**

This one-time repository setting prevents GitHub from publishing the uncompiled source branch. After it is selected, normal deployments only require pushing to `main`.

No Personal Access Token or repository secret is needed. The workflow uses GitHub's short-lived built-in identity with the minimum `pages: write` and `id-token: write` permissions.

Because this template targets `<username>.github.io`, `vite.config.ts` uses `base: "/"`.

## Validate a change

```bash
npm run lint
npm run build
```

The generated `dist/` directory and installed `node_modules/` directory are intentionally ignored by Git.
