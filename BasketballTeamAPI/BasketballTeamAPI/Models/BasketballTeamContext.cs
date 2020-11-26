using System;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata;

#nullable disable

namespace BasketballTeamAPI.Models
{
    public partial class BasketballTeamContext : DbContext
    {
        public BasketballTeamContext()
        {
        }

        public BasketballTeamContext(DbContextOptions<BasketballTeamContext> options)
            : base(options)
        {
        }

        public virtual DbSet<CourtFee> CourtFees { get; set; }
        public virtual DbSet<Fixture> Fixtures { get; set; }
        public virtual DbSet<Member> Members { get; set; }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            if (!optionsBuilder.IsConfigured)
            {
                optionsBuilder.UseSqlServer("Server=challengedb.cavd7ezcvwdx.us-east-1.rds.amazonaws.com, 1433;Database=BasketballTeam;User=admin;Password=heyletmein05");
                //optionsBuilder.UseSqlServer("Server=.\\SQLExpress;Database=BasketballTeam;Trusted_Connection=True;");
            }
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<CourtFee>(entity =>
            {
                entity.ToTable("CourtFee");

                entity.Property(e => e.CourtFeeId).HasColumnName("CourtFeeID");

                entity.Property(e => e.FixtureId).HasColumnName("FixtureID");

                entity.Property(e => e.PayeeId).HasColumnName("PayeeID");

                entity.HasOne(d => d.Fixture)
                    .WithMany(p => p.CourtFees)
                    .HasForeignKey(d => d.FixtureId)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("FK_CourtFee_Fixture");

                entity.HasOne(d => d.Payee)
                    .WithMany(p => p.CourtFees)
                    .HasForeignKey(d => d.PayeeId)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("FK_CourtFee_Member");
            });

            modelBuilder.Entity<Fixture>(entity =>
            {
                entity.ToTable("Fixture");

                entity.Property(e => e.FixtureId).HasColumnName("FixtureID");

                entity.Property(e => e.FixtureDate).HasColumnType("datetime");

                entity.Property(e => e.Venue)
                    .IsRequired()
                    .HasMaxLength(50);
            });

            modelBuilder.Entity<Member>(entity =>
            {
                entity.ToTable("Member");

                entity.Property(e => e.MemberId).HasColumnName("MemberID");

                entity.Property(e => e.Email)
                    .IsRequired()
                    .HasMaxLength(50);

                entity.Property(e => e.Name)
                    .IsRequired()
                    .HasMaxLength(50);

                entity.Property(e => e.Password)
                    .IsRequired()
                    .HasMaxLength(50);

                entity.Property(e => e.UserType)
                    .IsRequired()
                    .HasMaxLength(50);
            });

            OnModelCreatingPartial(modelBuilder);
        }

        partial void OnModelCreatingPartial(ModelBuilder modelBuilder);
    }
}
