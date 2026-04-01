"use client";

import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import { useState, useEffect } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import type { CarouselApi } from "@/components/ui/carousel";
import Image from "next/image";
import Link from "next/link";

interface GalleryHoverCarouselItem {
  id: string;
  title: string;
  summary: string;
  url: string;
  image: string;
}

const TTM_SERVICES: GalleryHoverCarouselItem[] = [
  {
    id: "travelling",
    title: "Travelling Tuition",
    summary:
      "Flexible teaching for students balancing travel, relocation, or demanding extracurricular schedules without losing structure or academic momentum.",
    url: "/services#travelling",
    image:
      "https://images.unsplash.com/photo-1748009799611-0fe8744c813c?auto=format&fit=crop&w=1600&q=80",
  },
  {
    id: "hourly",
    title: "Hourly Tuition",
    summary:
      "Weekly subject support, exam preparation, or short-term intervention for students who need targeted help delivered with precision.",
    url: "/services#hourly",
    image:
      "https://images.unsplash.com/photo-1583468991267-3f068b607ae1?auto=format&fit=crop&w=1600&q=80",
  },
  {
    id: "online",
    title: "Online Tuition",
    summary:
      "Online teaching designed to feel focused and personal, with clear feedback loops for families managing demanding calendars or longer distances.",
    url: "/services#online",
    image:
      "https://images.unsplash.com/photo-1596247290824-e9f12b8c574f?auto=format&fit=crop&w=1600&q=80",
  },
  {
    id: "homeschool",
    title: "Homeschool Guidance",
    summary:
      "Sequenced plans, carefully matched tutors, and ongoing guidance for students learning outside a standard timetable or needing a calmer academic structure.",
    url: "/services#homeschool",
    image:
      "https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=1600&q=80",
  },
];

export default function GalleryHoverCarousel({
  id,
  heading = "Our Services",
  items = TTM_SERVICES,
}: {
  id?: string;
  heading?: string;
  demoUrl?: string;
  items?: GalleryHoverCarouselItem[];
}) {
  const [carouselApi, setCarouselApi] = useState<CarouselApi>();
  const [canScrollPrev, setCanScrollPrev] = useState(false);
  const [canScrollNext, setCanScrollNext] = useState(false);

  useEffect(() => {
    if (!carouselApi) return;
    const update = () => {
      setCanScrollPrev(carouselApi.canScrollPrev());
      setCanScrollNext(carouselApi.canScrollNext());
    };
    update();
    carouselApi.on("select", update);
    return () => {
      carouselApi.off("select", update);
    };
  }, [carouselApi]);

  return (
    <section id={id} className="py-16">
      <div className="container">
        {/* ── Heading row — aligned with container edge ── */}
        <div className="mb-8 flex flex-col justify-between md:mb-10 md:flex-row md:items-end">
          <div className="max-w-2xl">
            <p className="eyebrow mb-3">Services</p>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-medium leading-tight tracking-tight" style={{ color: "var(--ink)" }}>
              {heading}
            </h2>
            <p className="mt-3 text-sm sm:text-base max-w-lg leading-relaxed" style={{ color: "var(--ink-soft)" }}>
              Hover or tap through the gallery to see how the same level of
              judgement, tutor matching, and close oversight adapts to very
              different family lives.
            </p>
          </div>
          <div className="flex gap-2 mt-4 md:mt-0">
            <Button
              variant="outline"
              size="icon"
              onClick={() => carouselApi?.scrollPrev()}
              disabled={!canScrollPrev}
              className="h-10 w-10 rounded-full"
            >
              <ChevronLeft className="h-4 w-4" />
            </Button>
            <Button
              variant="outline"
              size="icon"
              onClick={() => carouselApi?.scrollNext()}
              disabled={!canScrollNext}
              className="h-10 w-10 rounded-full"
            >
              <ChevronRight className="h-4 w-4" />
            </Button>
          </div>
        </div>

        {/* ── Carousel track — left edge matches heading ── */}
        <Carousel
          setApi={setCarouselApi}
          opts={{ breakpoints: { "(max-width: 768px)": { dragFree: true } } }}
          className="w-full"
        >
          <CarouselContent className="hide-scrollbar -ml-4">
            {items.map((item) => (
              <CarouselItem key={item.id} className="pl-4 md:max-w-[350px]">
                <Link
                  href={item.url}
                  className="group block relative w-full h-[300px] md:h-[350px]"
                >
                  <Card className="overflow-hidden h-full w-full rounded-3xl">
                    {/* Image */}
                    <div className="relative h-full w-full transition-all duration-500 group-hover:h-1/2">
                      <Image
                        width={400}
                        height={300}
                        src={item.image}
                        alt={item.title}
                        className="h-full w-full object-cover object-center"
                      />
                      <div className="absolute bottom-0 left-0 w-full h-20 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    </div>

                    {/* Text — revealed on hover */}
                    <div className="absolute bottom-0 left-0 w-full px-4 transition-all duration-500 group-hover:h-1/2 group-hover:flex flex-col justify-center bg-background/95 backdrop-blur-sm opacity-0 group-hover:opacity-100">
                      <h3 className="text-lg font-medium md:text-xl">
                        {item.title}
                      </h3>
                      <p className="text-muted-foreground text-sm md:text-base line-clamp-2">
                        {item.summary}
                      </p>
                      <Button
                        variant="outline"
                        size="icon"
                        className="absolute bottom-2 right-2 border border-gray-200 hover:-rotate-45 transition-all duration-500 rounded-full"
                        aria-label={`Go to ${item.title}`}
                      >
                        <ArrowRight className="size-4" />
                      </Button>
                    </div>
                  </Card>
                </Link>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </div>
    </section>
  );
}
