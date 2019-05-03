exports.countReviews = function countReviews(pr, reviews, state) {
  let count = 0
  let reviewers = new Set()
  reviews.forEach(review => {
    if (review.state == state && !reviewers.has(review.user.login) && pr.user.username != review.user.login) {
      count++;
      reviewers.add(review.user.login)
    }
  });

  return count;
}

exports.countReviewrs = function countReviewrs(pr, reviews) {
  return [...new Set(reviews.filter(review => pr.user.username != review.user.login).map(review => review.user.login))]
}