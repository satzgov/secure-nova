import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import Navbar from "@/components/Navbar";
import { Button } from "@/components/ui/button";

const EventDetail = () => {
  const { id } = useParams();

  const { data: event, isLoading: isLoadingEvent } = useQuery({
    queryKey: ['event', id],
    queryFn: async () => {
      const { data, error } = await supabase
        .from('events')
        .select('*')
        .eq('id', id)
        .single();
      
      if (error) throw error;
      return data;
    },
  });

  const { data: speakers, isLoading: isLoadingSpeakers } = useQuery({
    queryKey: ['event-speakers', id],
    queryFn: async () => {
      const { data, error } = await supabase
        .from('speakers')
        .select('*')
        .eq('event_id', id);
      
      if (error) throw error;
      return data;
    },
  });

  const { data: tickets, isLoading: isLoadingTickets } = useQuery({
    queryKey: ['event-tickets', id],
    queryFn: async () => {
      const { data, error } = await supabase
        .from('tickets')
        .select('*')
        .eq('event_id', id);
      
      if (error) throw error;
      return data;
    },
  });

  if (isLoadingEvent || isLoadingSpeakers || isLoadingTickets) {
    return (
      <div className="min-h-screen">
        <Navbar />
        <div className="container mx-auto px-4 py-8">
          Loading event details...
        </div>
      </div>
    );
  }

  if (!event) {
    return (
      <div className="min-h-screen">
        <Navbar />
        <div className="container mx-auto px-4 py-8">
          Event not found
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      {/* Banner Image */}
      {event.banner_image && (
        <div className="relative h-[400px] w-full">
          <img 
            src={event.banner_image} 
            alt={event.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/40" />
          <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
            <h1 className="text-4xl font-bold mb-2">{event.title}</h1>
            <div className="flex items-center gap-4">
              <span>{new Date(event.start_date).toLocaleDateString()}</span>
              <span>•</span>
              <span>{event.location}</span>
            </div>
          </div>
        </div>
      )}

      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Description */}
            <section className="bg-white rounded-lg p-6 shadow-sm">
              <h2 className="text-2xl font-semibold mb-4">About This Event</h2>
              <p className="text-gray-600 whitespace-pre-wrap">{event.description}</p>
            </section>

            {/* Speakers */}
            {speakers && speakers.length > 0 && (
              <section className="bg-white rounded-lg p-6 shadow-sm">
                <h2 className="text-2xl font-semibold mb-4">Speakers</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {speakers.map((speaker) => (
                    <div key={speaker.id} className="flex items-start space-x-4">
                      {speaker.image && (
                        <img 
                          src={speaker.image} 
                          alt={speaker.name}
                          className="w-16 h-16 rounded-full object-cover"
                        />
                      )}
                      <div>
                        <h3 className="font-semibold">{speaker.name}</h3>
                        <p className="text-sm text-gray-600">{speaker.bio}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </section>
            )}

            {/* Location */}
            <section className="bg-white rounded-lg p-6 shadow-sm">
              <h2 className="text-2xl font-semibold mb-4">Location</h2>
              <p className="text-gray-600 mb-4">{event.address}</p>
              {/* Map will be added in the next iteration */}
            </section>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Tickets */}
            {tickets && tickets.length > 0 && (
              <div className="bg-white rounded-lg p-6 shadow-sm">
                <h2 className="text-2xl font-semibold mb-4">Tickets</h2>
                <div className="space-y-4">
                  {tickets.map((ticket) => (
                    <div key={ticket.id} className="border rounded-lg p-4">
                      <div className="flex justify-between items-start mb-2">
                        <div>
                          <h3 className="font-semibold">{ticket.type}</h3>
                          <p className="text-sm text-gray-600">
                            {ticket.remaining} remaining
                          </p>
                        </div>
                        <div className="text-xl font-semibold">
                          ${ticket.price}
                        </div>
                      </div>
                      <Button className="w-full">
                        Select
                      </Button>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Share */}
            <div className="bg-white rounded-lg p-6 shadow-sm">
              <h2 className="text-lg font-semibold mb-4">Share This Event</h2>
              <div className="flex gap-4">
                <Button variant="outline" size="icon">
                  <i className="fab fa-facebook-f"></i>
                </Button>
                <Button variant="outline" size="icon">
                  <i className="fab fa-twitter"></i>
                </Button>
                <Button variant="outline" size="icon">
                  <i className="fab fa-linkedin-in"></i>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventDetail;