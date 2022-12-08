## Contribution tutorial

This guide will walk you through finding an issue, fixing it, and then submitting your fix to the `bacalhau-project/docs.bacalhau.org` project.

There are plenty of small-sized issues around Filecoin documentation that make for easy, helpful contributions to the Filecoin project. Here, we'll walk through:

1. Finding an issue.
2. Discussing the issue.
3. Creating a fix.
4. Submitting a _pull request_.
5. Waiting for a review.
6. Merging your fix.

This may look like a lot of steps for a small issue fix, but they're all necessary to make sure we keep the docs in this project up to standard. Plus, you're not on your own — half these steps can be completed by Filecoin docs project maintainers!

## Finding an issue

The Filecoin project is hosted in GitHub. There's a bunch of reasons for this, one of them being that GitHub comes with an issue tracker, which enables the core Filecoin team to field problems from the community. All community issues can read the docs, find issues, and raise issues in the docs repository (called a _repo_ for short).

All issues involving the Filecoin docs themselves can be found here in the `bacalhau-project/docs.bacalhau.org` repo under the [**Issues** tab](https://github.com/bacalhau-project/docs.bacalhau.org/issues). Here you can see all the issues that are currently open. We try to tag each issue with relevant descriptive tags. 
Let's jump into finding an issue.

1. Go to the Filecoin Docs repository at [github.com/bacalhau-project/docs.bacalhau.org](https://github.com/bacalhau-project/docs.bacalhau.org).
2. Select the **Issues** tab.
3. Select an issue that interests you.


## Creating a fix

The process goes something like this:

1. Create a _fork_.
2. Clone your copy of the project down to your local machine:

   ```shell
   git clone https://github.com/bacalhau-project/docs.bacalhau.org.git
   ```
3. Make changes locally on your machine by following this [guide](https://github.com/bacalhau-project/docs.bacalhau.org#develop-docs-locally).
4. Once all your changes are complete, make sure to push everything back to GitHub:

   ```shell
   git add .
   git commit -m "Fixed a broken URL, issue #123."
   git push
   ```

## Create a pull request

Once you're done making commits, and are ready to get a core team member's review of your work, it's time to create a pull request.

1. Go to the `bacalhau-project/docs.bacalhau.org` repository on [GitHub](https://github.com/bacalhau-project/docs.bacalhau.org).
2. Select the **Pull requests** tab.
3. Click **New pull request**.
4. Click **compare across forks** and select your repository from the **head repository** dropdown.
5. Leave a comment to expand upon your changes.
6. Click **Create pull request**.

GitHub will check if your changes create any merge conflicts with the branch you are trying to merge into.

## Waiting for a review

All pull requests from the community must be reviewed by at least one project member before they are merged in. Depending on the size of the pull request, this could take anywhere from a few minutes to a few days to review everything. Depending on the complexity of the pull request, there may be further discussion regarding your changes. Keep returning to GitHub and checking your notifications page to make sure you don't miss anything.

## Merge your fix

Once your pull request has been approved, a project member with the correct rights will merge it. You'll be notified as soon as the merge is complete.

## Finishing up

So there you have it! You've successfully completed your first contribution to the Filecoin documentation. We're always on the lookout for great writers and educators to help us improve the Filecoin docs and make the internet better for everyone, so keep up the good work!
