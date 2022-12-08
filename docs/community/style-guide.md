---
sidebar_label: 'Style Guide'
sidebar_position: 1
description: 'This guide explains things to keep in mind when writing for Bacalhau’s documentation.'
---

# Style Guide

The Bacalhau Project documentation aims to provide information on how to transform data processing for large-scale datasets to improve cost and efficiency. Our purpose is to open data processing to larger audiences, and our documentation set reflects this intention.

The primary objective of the Bacalhau Documentation Style Guide is to help authors write clear and accurate information while facilitating consistency across all documentation. In this way, we can collectively create valuable learning materials that help developers learn and process data with Bacalhau. 

## Style, Voice and Tone
Our goal is to use conversational tone that is natural, and friendly towards the reader and to ensure that the document's content is simple and easy to follow.

### Friendly and open 
As we write for a large global audience, we aim for a universally accessible voice.
- Maintain a friendly, informal tone, but focus on being clear and concise in a knowledgeable manner. 
- Exclude slang and colloquial language and avoid offensive language in all forms, and toward all identities and cultures.
- Write in the second person (e.g. “You will…”), present tense to guide the reader to their intended outcome. 
- When writing consider that many users are not native English speakers.
- Consider language that encourages readers and walk them through the steps to achieve the outcome they’re looking for.

The goal is to for readers to leave with a feeling of accomplishment and satisfaction, gaining information efficiently and solving their problems in a way that helps them thrive with Bacalhau.

### Comprehensive and technically correct
Our documentation should reflect our purpose, giving the appropriate amount of technical detail and clarity needed in a way that is palatable to all audiences. As best as we can, our documentation should reflect industry-standard practices and inspire trust in our voice and project. To do this, 
- Ensure that word choice does not reflect an assumption of the reader’s knowledge level (e.g, using ‘easy’, ‘simple’, ‘quick’, etc) or exclude the detailed explanations or background needed to be successful. 
- Provide the commands needed to be successful with explanations of the ‘why’ behind the command is preferred when appropriate, with the goal of the reader both gaining their expected outcome and learning in the process. 
- To ensure clarity, start by briefly specifying the context of the current topic.
- Share abbreviations and acronyms with at least one reference to its full name or title on the page to inspire deeper learning into Compute. 
- Capitalize ‘Bacalhau’ and ‘Docker’ in our articles and ‘Compute’ in non CLI-based references. 
- Test each code snippet and example, walking through each step to ensure accuracy as it's written.

With these guidelines, we can provide a comprehensive set of documentation that is clear, actionable, and helpful. 

## Structure
The Bacalhau documentation set should include articles and tutorials that have a consistent structure, which includes an introduction and the procedural steps necessary for a reader to get to their expected outcome. 

### Structure Guidelines
The specific structure depends on the type of documentation you are writing. On general note, the documentation should include: an introduction, a conclusion, and any prerequisites necessary for a reader to get started. 

Most of the tutorials and examples we publish are procedural, which walk the reader through accomplishing a task step-by-step. The structure for a procedural documentation should be:

```
Title (Level 1 heading)
Introduction (Level 3 heading)
Prerequisites (Level 2 heading)
Step 1 — Doing the First Thing (Level 2 heading)
Step 2 — Doing the Next Thing (Level 2 heading)
…
Step n — Doing the Last Thing (Level 2 heading)
Conclusion (Level 2 heading)
```

If the documentation is conceptual: 

```
Title (Level 1 heading)
Introduction (Level 3 heading)
Prerequisites (optional) (Level 2 heading)
Subtopic 1 (Level 2 heading)
Subtopic 2 (Level 2 heading)
…
Subtopic n (Level 2 heading)
Conclusion (Level 2 heading)
```

In this way, readers can learn and hop to pertinent information as they need efficiently, and find answers when they need.

## Formatting
Our documentation is written in [Markdown markup language](https://www.markdownguide.org/basic-syntax/).The following rules explain how we organize and structure our writing. The rules outlined here are in addition to the [rules](https://github.com/DavidAnson/markdownlint/blob/master/doc/Rules.md) found within the [Markdownlinter extension](https://github.com/DavidAnson/vscode-markdownlint).
.

### Titles

All titles should follow [title case capitalization structure](https://apastyle.apa.org/style-grammar-guidelines/capitalization/title-case). 
```
❌ molecular dynamics with bacalhau
✅ Molecular Dynamics with Bacalhau
```

### Headers
The title should be an H1 header; the introduction, prerequisites, steps, and conclusion should have H2 headers.

### Meta-description
Every article should have a _front-matter_  description.
```markdown
---
description: This is a brief description that shows up in link teasers in services like Twitter and Slack.
---
```

### In-Code blocks

In-line code formatting uses backticks (`). It should be used for:
- Command names, like `bacalhau docker run`
- File names and paths, like `/inputs `
- Example URLs, like `http://your_domain`
- Command flag like `--gpu`

### Code Blocks
Code blocks uses escaping backticks (```). It should be used for:

- Commands the reader needs to execute to complete the tutorial
- Files and scripts
- Terminal output
- Interactive dialogues that are in text

```
bacalhau docker run ubuntu echo Hello World
```

Do not include the command prompt ($ or #) in the code block

### Callout blocks
The callout blocks include: notes, tips, warnings, caution, info etc. These are used todisplay very important text.

Here’s a Markdown example of a note and a warning (this is an image):

```markdown
:::tip
Here is an example
:::
```

It will render as

:::tip
Here is an example
:::