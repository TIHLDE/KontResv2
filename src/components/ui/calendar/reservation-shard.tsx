import { DetailedReservation } from '../../../utils/apis/types';
import Link from 'Next/link';

function hexColorFromUUID(uuid: string) {
    let hash = 0;
    for (let i = 0; i < uuid.length; i++) {
        hash = uuid.charCodeAt(i) + ((hash << 5) - hash);
    }
    let c = (hash & 0x00ffffff).toString(16).toUpperCase();
    return '#' + '00000'.substring(0, 6 - c.length) + c;
}

export default function ReservationShard({
    top,
    left,
    width,
    height,
    color,
    reservation,
    setRelativeMousePosition,
}: {
    top: number | string;
    left: number | string;
    width: number | string;
    height: number | string;
    color: string;
    reservation: DetailedReservation;
    setRelativeMousePosition: (e: any) => void;
}) {
    return (
        <Link
            href={'/reservation/' + reservation.id}
            className="absolute rounded-md shadow-lg border z-10"
            style={{
                top: top,
                left: left,
                width: width,
                height: height,
                backgroundColor: hexColorFromUUID(reservation.id),
            }}
        >
            <div
                onMouseEnter={(e) => e.stopPropagation()}
                onMouseOver={(e) => e.stopPropagation()}
                onMouseLeave={(e) => {
                    e.stopPropagation();
                    e.preventDefault();
                    setRelativeMousePosition(null);
                }}
                onMouseDown={(e) => e.stopPropagation()}
                onMouseUp={(e) => e.stopPropagation()}
                onMouseMove={(e) => {
                    e.stopPropagation();
                    e.preventDefault();
                    setRelativeMousePosition(null);
                }}
            >
                <div className="text-sm text-white m-2 overflow-hidden ">
                    {reservation.description}
                </div>
            </div>
        </Link>
    );
}
