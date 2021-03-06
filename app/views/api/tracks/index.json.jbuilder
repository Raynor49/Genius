@tracks.each do |track|
  json.set! track.id do
    json.partial! '/api/tracks/track', track: track
    json.annotation_ids track.annotations.pluck(:id)
    json.comment_ids track.comments.pluck(:id)
  end
end

# annotations = @tracks.map(&:annotations).flatten
# json.annotations do
#   annotations.each do |annotation|
#     json.set! annotation.id do
#       json.partial! 'api/annotations/annotation/', annotation: annotation
#     end
#   end
# end
