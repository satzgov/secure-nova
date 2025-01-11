import { useQuery } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const PastEvents = () => {
  const { data: events, isLoading, error } = useQuery({
    queryKey: ['pastEvents'],
    queryFn: async () => {
      const { data, error } = await supabase
        .from('events')
        .select('*')
        .eq('status', 'past')
        .order('start_date', { ascending: false });
      
      if (error) throw error;
      return data;
    }
  });

  if (error) {
    console.error('Error fetching events:', error);
    return <div className="text-center p-4">Error loading events</div>;
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-8">Past Events</h1>
        {isLoading ? (
          <div className="text-center">Loading events...</div>
        ) : events && events.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {events.map((event) => (
              <div key={event.id} className="bg-white rounded-lg shadow-md p-6">
                {event.banner_image && (
                  <img
                    src={event.banner_image}
                    alt={event.title}
                    className="w-full h-48 object-cover rounded-md mb-4"
                  />
                )}
                <h2 className="text-xl font-semibold mb-2">{event.title}</h2>
                <p className="text-gray-600 mb-4">{event.description}</p>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-500">
                    {new Date(event.start_date).toLocaleDateString()}
                  </span>
                  <Button asChild>
                    <Link to={`/events/${event.id}`}>View Details</Link>
                  </Button>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center">No past events found</div>
        )}
      </div>
    </div>
  );
};

export default PastEvents;